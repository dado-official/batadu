const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").createServer(app);
const io = require("socket.io")(http, {
    cors: { origin: "*" },
});
const Room = require("./GameElements/Room");
const axios = require("axios");
const databaseFunction = require("./databaseFunctions");

let rooms = []; //array for all rooms

rooms["test"] = new Room({ name: "test", punkte: 18, isPassword: false });
rooms["test"].kartenMaster.kartenMischen();

app.use(cors());
app.get("/room/select/:name", (req, res) => {
    let name = req.params.name;
    if (rooms[name].selectTeam()) {
        res.send(true);
    } else res.send(false);
});

app.get("");

app.get("/room/isPassword/:name", (req, res) => {
    let name = req.params.name;
    if (rooms[name] === undefined || rooms[name] === null) {
        res.send(false);
        return;
    }
    if (rooms[name] !== undefined && rooms[name].password === "") {
        res.send(false);
    }
    if (rooms[name] !== undefined && rooms[name].password !== "") {
        res.send(true);
    }
});
app.get("/room/password/:name/:password", (req, res) => {
    let name = req.params.name;
    let password = req.params.password;
    if (rooms[name] !== undefined && rooms[name].password === password) {
        res.send(true);
        return;
    }
    res.send(false);
});
app.get("/room/available/:name", (req, res) => {
    let name = req.params.name;
    if (rooms[name] !== undefined) {
        res.send(true);
        return;
    }
    res.send(false);
});

app.get("/room/:name", (req, res) => {
    console.log("sepp");
    let name = req.params.name;
    if (rooms[name]) {
        res.send(rooms[name].getNecessary());
    } else {
        res.send(false);
    }
});

io.on("connection", (socket) => {
    socket.on("createRoom", (config) => {
        rooms[config.name] = new Room(config);

        rooms[config.name].kartenMaster.kartenMischen();

        let i = 0;
        let roomsSend = [];
        for (var key in rooms) {
            roomsSend[i] = rooms[key].getNecessary();
            i++;
        }
        socket.broadcast.emit("rooms", roomsSend);
    });

    socket.on("getRooms", () => {
        let i = 0;
        let roomsSend = [];
        for (var key in rooms) {
            roomsSend[i] = rooms[key].getNecessary();
            i++;
        }
        socket.emit("rooms", roomsSend);
    });

    socket.on("spectateRoom", (data) => {
        let room = data.room;
        console.log("New Spectator :)");
        let user = data.user;
        if (!rooms[room]) {
            socket.emit("roomNotExist");
            return;
        }
        socket.emit("roomExist");
        socket.join(room); //joinig a room
        rooms[room]?.spectators.push(user);
        socket.emit("players", {
            userPos: rooms[room].userPos,
            userTeam: rooms[room].userTeam,
            userStiche: rooms[room].userStiche,
            userStatus: rooms[room].userStatus,
        });

        if (rooms[room].team1Punkte !== 0 || rooms[room].team2Punkte !== 0) {
            socket.emit("punkte", {
                team1: rooms[room].team1Punkte,
                team2: rooms[room].team2Punkte,
            });
        }
        io.to(room).emit("spectators", {
            spectators: rooms[room].spectators,
        });

        socket.on("end", () => {
            socket.disconnect(0);
            disconnectUser();
        });

        socket.on("disconnect", () => {
            disconnectUser();
        });

        function disconnectUser() {
            try {
                if (rooms[room] !== undefined) {
                    rooms[room].removeSpectator(user);
                    io.to(room).emit("spectators", {
                        spectators: rooms[room].spectators,
                    });
                }
            } catch (e) {
                console.log(e);
            }
        }
    });

    socket.on("joinRoom", (data) => {
        //client joining a room
        let room = data.room;
        console.log("User Joined :)");
        console.log(data.user);
        let user = data.user;
        let team = data.team;
        let typingUsers = [];

        if (
            rooms[room] === undefined ||
            rooms[room].freePos.length === 0 ||
            rooms[room].userPos.some((e) => e?.userId === user.userId)
        ) {
            socket.emit("roomNotExist");
            return;
        }

        if (team !== 0) {
            let hasWorked = rooms[room].addTeam(team, user);
            if (!hasWorked) socket.emit("roomNotExist");
        } else {
            let pos = rooms[room].addUser(user);
        }

        socket.emit("roomExist"); //saying to the client that the room exists

        socket.join(room); //joinig a room
        socket.emit("pos");
        io.to(room).emit("players", {
            userPos: rooms[room].userPos,
            userTeam: rooms[room].userTeam,
            userStiche: rooms[room].userStiche,
            userStatus: rooms[room].userStatus,
        });

        if (rooms[room].team1Punkte !== 0 || rooms[room].team2Punkte !== 0) {
            socket.emit("punkte", {
                team1: rooms[room].team1Punkte,
                team2: rooms[room].team2Punkte,
            });
        }

        //Hier beginnt das Spiel :)
        if (rooms[room].freePos.length === 0) {
            io.to(room).emit("chat", {
                message: `Das Spiel beginnt????`,
                sender: {
                    userPic:
                        "https://cdn1.iconfinder.com/data/icons/science-technology-outline-24-px/24/Android_android_robot_operative_system_robot_technology-48.png",
                    username: "System",
                    userId: -1,
                },
                type: "text",
            });

            if (rooms[room].pausiert) {
                //do something
                io.to(room).emit("karten", rooms[room].userCards);
                io.to(room).emit("status", rooms[room].userStatus);
                io.to(room).emit("tischkarten", rooms[room].tischCards);
                rooms[room].pausiert = false;
                if (rooms[room].seeCards) {
                    io.to(room).emit("karten sehen");
                }
                if (rooms[room].modus === "Offen") {
                    if (rooms[room].trumpfGewaelt) {
                        if (rooms[room].schlagGewaelt) {
                            io.to(room).emit("schlag trumpf", {
                                schlag: rooms[room].schlag.name,
                                trumpf: rooms[room].trumpf.name,
                            });
                        } else {
                            io.to(room).emit("schlag trumpf", {
                                schlag: null,
                                trumpf: rooms[room].trumpf.name,
                            });
                        }
                    } else if (rooms[room].schlagGewaelt) {
                        io.to(room).emit("schlag trumpf", {
                            schlag: rooms[room].schlag.name,
                            trumpf: null,
                        });
                    }
                } else {
                    if (
                        rooms[room].trumpfGewaelt &&
                        rooms[room].schlagGewaelt
                    ) {
                        io.to(room).emit("canSee", {
                            schlag: rooms[room].schlag.name,
                            trumpf: rooms[room].trumpf.name,
                            schlagPos: rooms[room].schlagPos,
                            trumpfPos: rooms[room].trumpfPos,
                        });
                    }
                }
            } else {
                rooms[room].kartenMaster.kartenMischen();
                rooms[room].kartenMaster.kartenAusteilen();
                io.to(room).emit("karten", rooms[room].userCards);
                rooms[room].userStatus[rooms[room].schlagPos] = "Schlag";
                if (rooms[room].modus === "Blind") {
                    rooms[room].userStatus[rooms[room].trumpfPos] = "Trumpf";
                }
                io.to(room).emit("status", rooms[room].userStatus);
                rooms[room].started = true;
            }
        }

        socket.on("chat", (message) => {
            //broadcast to roommembers when new message
            console.log(message);
            io.to(room).emit("chat", message);
        });

        socket.on("typing", (data) => {
            if (data.typing && !typingUsers.includes(data.user)) {
                typingUsers.push(data.user);
            } else if (!data.typing && typingUsers.includes(data.user)) {
                const index = typingUsers.indexOf(data.user);
                if (index > -1) {
                    typingUsers.splice(index, 1);
                }
            }
            io.to(room).emit("typing", typingUsers);
        });

        socket.on("Schlag", (card) => {
            rooms[room].schlag = card;
            if (rooms[room].trumpfGewaelt) {
                io.to(room).emit("karten sehen");
                rooms[room].seeCards = true;
                io.to(room).emit("schlag trumpf", {
                    schlag: rooms[room].schlag.name,
                    trumpf: rooms[room].trumpf.name,
                });
                rooms[room].userStatus = [];
                rooms[room].userStatus[rooms[room].amZug] = "Am Zug";
                if (rooms[room].isInGestrichenTeam(rooms[room].amZug)) {
                    io.to("4erle");
                    let status = [];
                    status[rooms[room].amZug] = "Geboten Antwort";
                    io.to(room).emit("status", status);
                } else {
                    io.to(room).emit("status", rooms[room].userStatus);
                }
            } else {
                rooms[room].userStatus[rooms[room].schlagPos] = null;
                rooms[room].userStatus[rooms[room].trumpfPos] = "Trumpf";
                if (rooms[room].modus === "Offen") {
                    io.to(room).emit("schlag trumpf", {
                        schlag: rooms[room].schlag.name,
                        trumpf: null,
                    });
                }
                io.to(room).emit("status", rooms[room].userStatus);
            }
            rooms[room].schlagGewaelt = true;
        });

        socket.on("Trumpf", (card) => {
            rooms[room].trumpf = card;

            if (rooms[room].schlagGewaelt) {
                io.to(room).emit("karten sehen");
                rooms[room].seeCards = true;
                io.to(room).emit("schlag trumpf", {
                    schlag: rooms[room].schlag.name,
                    trumpf: rooms[room].trumpf.name,
                });
                rooms[room].userStatus = [];
                rooms[room].userStatus[rooms[room].amZug] = "Am Zug";
                if (rooms[room].isInGestrichenTeam(rooms[room].amZug)) {
                    io.to(room).emit("4erle");
                    let status = [];
                    status[rooms[room].amZug] = "Geboten Antwort";
                    io.to(room).emit("status", status);
                } else {
                    io.to(room).emit("status", rooms[room].userStatus);
                }
            } else {
                rooms[room].userStatus[rooms[room].trumpfPos] = null;
                io.to(room).emit("status", rooms[room].userStatus);
            }
            rooms[room].trumpfGewaelt = true;
        });
        socket.on("bieten", (pos) => {
            let haltenPos;
            if (!rooms[room].trumpfGewaelt || !rooms[room].schlagGewaelt) {
                if (pos === rooms[room].schlagPos)
                    haltenPos = rooms[room].trumpfPos;
                else if (pos === rooms[room].trumpfPos)
                    haltenPos = rooms[room].schlagPos;
            } else {
                haltenPos = pos - 1;
                if (haltenPos === -1) haltenPos = 3;
            }
            let status = [];
            status[haltenPos] = "Geboten Antwort";
            io.to(room).emit("status", status);
            rooms[room].gebotenDavor = rooms[room].getTeam(pos);
            io.to(room).emit("geboten davor", rooms[room].gebotenDavor);
        });
        socket.on("4erle halten", () => {
            //geboten++
            io.to(room).emit("status", rooms[room].userStatus);
            rooms[room].geboten += 2;
            io.to(room).emit("geboten", rooms[room].geboten);
        });
        socket.on("halten", () => {
            //geboten++
            io.to(room).emit("status", rooms[room].userStatus);
            rooms[room].geboten += 1;
            io.to(room).emit("geboten", rooms[room].geboten);
        });
        socket.on("ablehnen", (pos) => {
            //anderes team gewinnt
            //neue Runde
            let team;
            if (pos % 2 === 0) team = 1;
            else team = 2;

            let nachricht = `Team ${team} hat nicht gehalten ????`;
            io.to(room).emit("chat", {
                message: nachricht,
                sender: {
                    userPic:
                        "https://cdn1.iconfinder.com/data/icons/science-technology-outline-24-px/24/Android_android_robot_operative_system_robot_technology-48.png",
                    username: "System",
                    userId: -1,
                },
                type: "text",
            });

            chatSendSchlagTrumpf(rooms[room].schlag, rooms[room].trumpf);
            let punkte = rooms[room].getTeamPunkteAbgelehnt(pos);
            io.to(room).emit("punkte", punkte);

            if (rooms[room].isTeam1Gestrichen()) {
                io.to(room).emit("team1 gestrichen");
            }
            if (rooms[room].isTeam2Gestrichen()) {
                io.to(room).emit("team2 gestrichen");
            }
            let winningTeam = rooms[room].checkWin();
            if (winningTeam !== 0) {
                io.to(room).emit("win", winningTeam);
                databaseFunction.addGame(
                    rooms[room]?.userPos.map((e) => e.userId),
                    rooms[room]?.team1Punkte,
                    rooms[room]?.team2Punkte,
                    rooms[room]?.maxPoints
                );
                setTimeout(() => {
                    if (rooms[room] !== undefined) {
                        if (rooms[room].freePos.length === 0) {
                            io.to(room).emit("chat", {
                                message: `Das Spiel beginnt????`,
                                sender: {
                                    userPic:
                                        "https://cdn1.iconfinder.com/data/icons/science-technology-outline-24-px/24/Android_android_robot_operative_system_robot_technology-48.png",
                                    username: "System",
                                    userId: -1,
                                },
                                type: "text",
                            });
                            rooms[room].neuesSpiel();
                            io.to(room).emit("reset");
                            rooms[room].kartenMaster.kartenMischen();
                            rooms[room].kartenMaster.kartenAusteilen();
                            io.to(room).emit("karten", rooms[room].userCards);
                            rooms[room].userStatus[rooms[room].schlagPos] =
                                "Schlag";
                            rooms[room].userStatus[rooms[room].trumpfPos] =
                                "Trumpf";
                            io.to(room).emit("status", rooms[room].userStatus);
                        }
                    }
                }, 10000);
            } else {
                //neue Runde
                rooms[room].neueRunde();
                io.to(room).emit("neue Runde");
                rooms[room].kartenMaster.kartenMischen();
                rooms[room].kartenMaster.kartenAusteilen();
                io.to(room).emit("karten", rooms[room].userCards);
                rooms[room].userStatus[rooms[room].schlagPos] = "Schlag";
                rooms[room].userStatus[rooms[room].trumpfPos] = "Trumpf";
                io.to(room).emit("status", rooms[room].userStatus);
                io.to(room).emit("tischkarten", rooms[room].tischCards);
            }
        });
        socket.on("schlagtausch", (pos) => {
            let antwortenPos;
            if (pos === rooms[room].schlagPos) {
                antwortenPos = rooms[room].trumpfPos;
            } else if (pos === rooms[room].trumpfPos) {
                antwortenPos = rooms[room].schlagPos;
            }
            let status = [];
            status[antwortenPos] = "Schlagtausch Antwort";
            io.to(room).emit("status", status);
        });
        socket.on("sch??nere", (pos) => {
            let antwortenPos;
            if (pos === rooms[room].schlagPos) {
                antwortenPos = rooms[room].trumpfPos;
            } else if (pos === rooms[room].trumpfPos) {
                antwortenPos = rooms[room].schlagPos;
            }
            let status = [];
            status[antwortenPos] = "Sch??nere Antwort";
            io.to(room).emit("status", status);
        });
        socket.on("schlagtausch ablehnen", () => {
            io.to(room).emit("status", rooms[room].userStatus);
        });
        socket.on("schlagtausch annehmen", () => {
            rooms[room].resetSchlagTrumpf();
            let trumpfTmp = rooms[room].trumpfPos;
            rooms[room].trumpfPos = rooms[room].schlagPos;
            rooms[room].schlagPos = trumpfTmp;
            rooms[room].userStatus[rooms[room].schlagPos] = "Schlag";
            rooms[room].userStatus[rooms[room].trumpfPos] = "Trumpf";

            rooms[room].setSchlagtausch();
            rooms[room].userStatus[rooms[room].schlagPos] = "Schlag";
            rooms[room].userStatus[rooms[room].trumpfPos] = "Trumpf";
            io.to(room).emit("status", rooms[room].userStatus);
            io.to(room).emit("chat", {
                message: "Schlagtausch wurde angenommen????",
                sender: {
                    userPic:
                        "https://cdn1.iconfinder.com/data/icons/science-technology-outline-24-px/24/Android_android_robot_operative_system_robot_technology-48.png",
                    username: "System",
                    userId: -1,
                },
                type: "text",
            });
        });
        socket.on("sch??nere", (pos) => {
            let antwortenPos;
            if (pos === rooms[room].schlagPos) {
                antwortenPos = rooms[room].trumpfPos;
            } else if (pos === rooms[room].trumpfPos) {
                antwortenPos = rooms[room].schlagPos;
            }
            let status = [];
            status[antwortenPos] = "Sch??nere Antwort";
            io.to(room).emit("status", status);
        });
        socket.on("sch??nere ablehnen", () => {
            io.to(room).emit("kein sch??nere");
            io.to(room).emit("status", rooms[room].userStatus);
        });
        socket.on("sch??nere annehmen", () => {
            rooms[room].resetSchlagTrumpf();
            rooms[room].userStatus[rooms[room].schlagPos] = "Schlag";
            rooms[room].userStatus[rooms[room].trumpfPos] = "Trumpf";
            rooms[room].kartenMaster.kartenMischen();
            rooms[room].kartenMaster.kartenAusteilen();
            io.to(room).emit("karten", rooms[room].userCards);
            io.to(room).emit("status", rooms[room].userStatus);
            io.to(room).emit("chat", {
                message: "Sch??nere wurde angenommen????",
                sender: {
                    userPic:
                        "https://cdn1.iconfinder.com/data/icons/science-technology-outline-24-px/24/Android_android_robot_operative_system_robot_technology-48.png",
                    username: "System",
                    userId: -1,
                },
                type: "text",
            });
        });
        socket.on("Am Zug", ({ card, pos }) => {
            rooms[room].createCheckObject();
            rooms[room].tischCardsObject.push({
                ...card,
                position: rooms[room].gelegt,
            });
            rooms[room].gelegt += 1;
            rooms[room].tischCards[rooms[room].amZug] = card.name;
            io.to(room).emit("tischkarten", rooms[room].tischCards);

            if (rooms[room]?.rundeDisc === "Pausieren") {
                const index = rooms[room]?.userCards[pos]
                    ?.map((e) => e.name)
                    .indexOf(card.name);
                console.log(index);
                if (index > -1) {
                    rooms[room]?.userCards[pos].splice(index, 1);
                }
                console.log(rooms[room]?.userCards[pos]);
            }

            //Wenn jeder am zug war oder nicht
            if (rooms[room].gelegt < 4) {
                rooms[room].minusPosition();
                rooms[room].userStatus = [];
                rooms[room].userStatus[rooms[room].amZug] = "Am Zug";
                if (
                    rooms[room].isInGestrichenTeam(rooms[room].amZug) &&
                    rooms[room].amZug === rooms[room].trumpfPos &&
                    rooms[room].team1Stiche === 0 &&
                    rooms[room].team2Stiche === 0
                ) {
                    io.to(room).emit("4erle");
                    let status = [];
                    status[rooms[room].amZug] = "Geboten Antwort";
                    io.to(room).emit("status", status);
                } else {
                    io.to(room).emit("status", rooms[room].userStatus);
                }
            } else {
                //gewinner berechnen
                let gewonnen = rooms[room].kartenMaster.getBestKarte(
                    rooms[room].createCheckObject(),
                    2
                );
                let gewonnenPos = rooms[room].gewinnerPos(gewonnen.position);
                if (rooms[room].stich === 0) {
                    io.to(room).emit("stich", gewonnenPos);
                }

                rooms[room].userStatus = [];
                rooms[room].userStatus[gewonnenPos] = "Gestochen????";

                databaseFunction.addXp(
                    2,
                    rooms[room]?.userPos[gewonnenPos].userId
                );

                io.to(room).emit("status", rooms[room].userStatus);
                rooms[room].stich += 1;
                rooms[room].addStichToTeam(gewonnenPos);
                io.to(room).emit("stiche", rooms[room].userStiche);
                if (rooms[room].stich === 2) {
                    io.to(room).emit("hide Stich");
                }
                setTimeout(() => {
                    if (rooms[room] !== undefined) {
                        if (rooms[room] !== undefined && rooms[room].won()) {
                            //wenn ein Team 3 Punkte hat
                            let punkte = rooms[room].getTeamPunkte();
                            io.to(room).emit("punkte", punkte);
                            chatSendSchlagTrumpf(
                                rooms[room].schlag,
                                rooms[room].trumpf
                            );

                            if (rooms[room].isTeam1Gestrichen()) {
                                io.to(room).emit("team1 gestrichen");
                            }
                            if (rooms[room].isTeam2Gestrichen()) {
                                io.to(room).emit("team2 gestrichen");
                            }

                            let winningTeam = rooms[room].checkWin();
                            if (winningTeam !== 0) {
                                io.to(room).emit("win", winningTeam);

                                databaseFunction.addGame(
                                    rooms[room]?.userPos.map((e) => e.userId),
                                    rooms[room]?.team1Punkte,
                                    rooms[room]?.team2Punkte,
                                    rooms[room]?.maxPoints
                                );

                                setTimeout(() => {
                                    if (
                                        rooms[room] !== undefined &&
                                        rooms[room].freePos.length === 0
                                    ) {
                                        io.to(room).emit("chat", {
                                            message: `Das Spiel beginnt????`,
                                            sender: {
                                                userPic:
                                                    "https://cdn1.iconfinder.com/data/icons/science-technology-outline-24-px/24/Android_android_robot_operative_system_robot_technology-48.png",
                                                username: "System",
                                                userId: -1,
                                            },
                                            type: "text",
                                        });
                                        rooms[room].neuesSpiel();
                                        io.to(room).emit("reset");

                                        rooms[
                                            room
                                        ].kartenMaster.kartenMischen();
                                        rooms[
                                            room
                                        ].kartenMaster.kartenAusteilen();
                                        io.to(room).emit(
                                            "karten",
                                            rooms[room].userCards
                                        );
                                        rooms[room].userStatus[
                                            rooms[room].schlagPos
                                        ] = "Schlag";
                                        rooms[room].userStatus[
                                            rooms[room].trumpfPos
                                        ] = "Trumpf";
                                        io.to(room).emit(
                                            "status",
                                            rooms[room].userStatus
                                        );
                                    }
                                }, 10000);
                            } else {
                                //neue Runde
                                rooms[room].neueRunde();
                                io.to(room).emit("neue Runde");
                                rooms[room].kartenMaster.kartenMischen();
                                rooms[room].kartenMaster.kartenAusteilen();
                                io.to(room).emit(
                                    "karten",
                                    rooms[room].userCards
                                );
                                rooms[room].userStatus[rooms[room].schlagPos] =
                                    "Schlag";
                                rooms[room].userStatus[rooms[room].trumpfPos] =
                                    "Trumpf";
                                io.to(room).emit(
                                    "status",
                                    rooms[room].userStatus
                                );
                                io.to(room).emit(
                                    "tischkarten",
                                    rooms[room].tischCards
                                );
                                io.to(room).emit(
                                    "stiche",
                                    rooms[room].userStiche
                                );
                            }
                        } else {
                            rooms[room].resetAfterStich(gewonnenPos);
                            rooms[room].userStatus = [];
                            rooms[room].userStatus[rooms[room].amZug] =
                                "Am Zug";
                            io.to(room).emit("reset nach stich", {
                                status: rooms[room].userStatus,
                                karten: rooms[room].tischCards,
                                stiche: rooms[room].userStiche,
                            });
                        }

                        //neu ziehen
                    }
                }, rooms[room].waitingTime * 1000);
                //gewinner ziehen und neu legen
            }
        });

        socket.on("disconnect", () => {
            disconnectUser();
        });

        socket.on("end", () => {
            socket.disconnect(0);
            disconnectUser();
        });

        function disconnectUser() {
            try {
                if (rooms[room] !== undefined) {
                    rooms[room].removeUser(user);
                    socket.to(room).emit("players", {
                        userPos: rooms[room].userPos,
                        userTeam: rooms[room].userTeam,
                        userStiche: rooms[room].userStiche,
                        userStatus: rooms[room].userStatus,
                    });
                    let reset = rooms[room].tryNeueRunde();
                    if (rooms[room].pausiert) {
                        socket.to(room).emit("reset status");
                    }

                    if (reset) {
                        socket.to(room).emit("neue Runde");
                        socket.to(room).emit("reset status");
                    }
                    if (rooms[room].freePos.length === 4) {
                        delete rooms[room];

                        let i = 0;
                        let roomsSend = [];
                        for (var key in rooms) {
                            roomsSend[i] = rooms[key].getNecessary();
                            i++;
                        }

                        socket.broadcast.emit("rooms", roomsSend);
                    }

                    socket.to(room).emit("chat", {
                        message: `Ich bin weg ????`,
                        sender: user,
                        type: "text",
                    });
                }
            } catch (e) {
                console.log(e);
            }
        }
        function chatSendSchlagTrumpf(schlag, trumpf) {
            let message = "";
            if (schlag !== undefined) {
                message = `Schlag: ${schlag.name}`;
            } else {
                message = "Schlag: ?????????????";
            }

            if (trumpf !== undefined) {
                message += `, Trumpf: ${trumpf.name}`;
            } else {
                message += ", Trumpf: ????";
            }
            io.to(room).emit("chat", {
                message: message,
                sender: {
                    userPic:
                        "https://cdn1.iconfinder.com/data/icons/science-technology-outline-24-px/24/Android_android_robot_operative_system_robot_technology-48.png",
                    username: "System",
                    userId: -1,
                },
                type: "text",
            });
        }
    });
});

http.listen(process.env.PORT || 8080, () =>
    console.log("listening on http://localhost:8080")
);
