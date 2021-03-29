const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http").createServer();
const io = require("socket.io")(http, {
    cors: { origin: "*" },
});
const KartenMaster = require("./GameElements/KartenMaster");
const Room = require("./GameElements/Room");

let rooms = []; //array for all rooms

rooms["Hirte"] = new Room({ userAnzahl: 4, name: "Hirte" });
kartenMaster = new KartenMaster(rooms["Hirte"]);
kartenMaster.kartenMischen();

app.use(cors());
app.get("/room/select/:name", (req, res) => {
    let name = req.params.name;
    if (rooms[name].selectTeam()) {
        res.send(true);
    } else res.send(false);
});

app.get("/room/:name", (req, res) => {
    let name = req.params.name;
    res.send(rooms[name].getNecessary());
});

app.listen(3003, () => console.log("Listening on Port 3003"));

io.on("connection", (socket) => {
    console.log("New Connection");

    socket.on("createRoom", (config) => {
        rooms[config.name] = new Room(config);

        kartenMaster = new KartenMaster(rooms[config.name]);
        kartenMaster.kartenMischen();

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

    socket.on("joinRoom", (data) => {
        //client joining a room
        let room = data.room;
        let user = data.user;
        let team = data.team;
        console.log("Team " + team);

        if (rooms[room] === undefined || rooms[room].freePos.length === 0) {
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

        console.log("Room name: " + room);

        socket.join(room); //joinig a room
        socket.emit("pos");
        io.to(room).emit("players", {
            userPos: rooms[room].userPos,
            userTeam: rooms[room].userTeam,
            userStiche: rooms[room].userStiche,
            userStatus: rooms[room].userStatus,
        });

        console.log("Länge " + rooms[room].userPos.length);
        //Hier beginnt das Spiel :)
        if (rooms[room].freePos.length === 0) {
            console.log("ddat spiel beginnt");
            io.to(room).emit("chat", {
                message: `Das Spiel beginnt`,
                sender: "System",
                type: "text",
            });

            kartenMaster.kartenMischen();
            kartenMaster.kartenAusteilen();
            io.to(room).emit("karten", rooms[room].userCards);
            rooms[room].userStatus[rooms[room].schlagPos] = "Schlag";
            rooms[room].userStatus[rooms[room].trumpfPos] = "Trumpf";
            io.to(room).emit("status", rooms[room].userStatus);
        }

        socket.on("chat", (message) => {
            //broadcast to roommembers when new message
            socket.to(room).emit("chat", message);
        });

        socket.on("Schlag", (card) => {
            rooms[room].schlag = card;
            console.log("Trumpf Gewählt: " + rooms[room].trumpfGewaelt);
            if (rooms[room].trumpfGewaelt) {
                io.to(room).emit("karten sehen");
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
                io.to(room).emit("status", rooms[room].userStatus);
            }
            rooms[room].schlagGewaelt = true;
        });

        socket.on("Trumpf", (card) => {
            rooms[room].trumpf = card;

            console.log("Schlag Gewählt: " + rooms[room].schlagGewaelt);
            if (rooms[room].schlagGewaelt) {
                io.to(room).emit("karten sehen");
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
                //if amzug == in gestrichen Team
                /*
                    Todo
                    - function: im gestrichen Team  && only 1 team gestrichen
                    - auch im schlag function
                    - geboten 4 senden
                */
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
            console.log("ablehnen");
            //neue Runde
            let team;
            if (pos % 2 === 0) team = 1;
            else team = 2;

            let nachricht = `Team ${team} hat nicht gehalten 😕`;
            io.to(room).emit("chat", {
                message: nachricht,
                sender: "System",
                type: "text",
            });
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
                console.log("Jemand hat gewonnen");
                io.to(room).emit("win", winningTeam);
                setTimeout(() => {
                    if (rooms[room].freePos.length === 0) {
                        console.log("ddat spiel beginnt");
                        io.to(room).emit("chat", {
                            message: `Das Spiel beginnt`,
                            sender: "System",
                            type: "text",
                        });
                        rooms[room].neuesSpiel();
                        io.to(room).emit("reset");
                        kartenMaster.kartenMischen();
                        kartenMaster.kartenAusteilen();
                        io.to(room).emit("karten", rooms[room].userCards);
                        rooms[room].userStatus[rooms[room].schlagPos] =
                            "Schlag";
                        rooms[room].userStatus[rooms[room].trumpfPos] =
                            "Trumpf";
                        io.to(room).emit("status", rooms[room].userStatus);
                    }
                }, 10000);
            } else {
                //neue Runde
                rooms[room].neueRunde();
                io.to(room).emit("neue Runde");
                kartenMaster.kartenMischen();
                kartenMaster.kartenAusteilen();
                io.to(room).emit("karten", rooms[room].userCards);
                rooms[room].userStatus[rooms[room].schlagPos] = "Schlag";
                rooms[room].userStatus[rooms[room].trumpfPos] = "Trumpf";
                io.to(room).emit("status", rooms[room].userStatus);
                io.to(room).emit("tischkarten", rooms[room].tischCards);

                console.log("gewonnen");
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
        socket.on("schönere", (pos) => {
            let antwortenPos;
            if (pos === rooms[room].schlagPos) {
                antwortenPos = rooms[room].trumpfPos;
            } else if (pos === rooms[room].trumpfPos) {
                antwortenPos = rooms[room].schlagPos;
            }
            let status = [];
            status[antwortenPos] = "Schönere Antwort";
            io.to(room).emit("status", status);
        });
        socket.on("schlagtausch ablehnen", () => {
            io.to(room).emit("status", rooms[room].userStatus);
        });
        socket.on("schlagtausch annehmen", () => {
            console.log("schlagtausch annehmen");
            let trumpfTmp = rooms[room].trumpfPos;
            rooms[room].trumpfPos = rooms[room].schlagPos;
            rooms[room].schlagPos = trumpfTmp;

            rooms[room].setSchlagtausch();
            rooms[room].userStatus[rooms[room].schlagPos] = "Schlag";
            rooms[room].userStatus[rooms[room].trumpfPos] = "Trumpf";
            io.to(room).emit("status", rooms[room].userStatus);
            io.to(room).emit("chat", {
                message: "Schlagtausch wurde angenommen",
                sender: "System",
                type: "text",
            });
        });
        socket.on("schönere", (pos) => {
            let antwortenPos;
            if (pos === rooms[room].schlagPos) {
                antwortenPos = rooms[room].trumpfPos;
            } else if (pos === rooms[room].trumpfPos) {
                antwortenPos = rooms[room].schlagPos;
            }
            let status = [];
            status[antwortenPos] = "Schönere Antwort";
            io.to(room).emit("status", status);
        });
        socket.on("schönere ablehnen", () => {
            io.to(room).emit("kein schönere");
            io.to(room).emit("status", rooms[room].userStatus);
            console.log("Schönere wurde abgelehnt");
        });
        socket.on("schönere annehmen", () => {
            kartenMaster.kartenMischen();
            kartenMaster.kartenAusteilen();
            io.to(room).emit("karten", rooms[room].userCards);
            io.to(room).emit("status", rooms[room].userStatus);
            io.to(room).emit("chat", {
                message: "Schönere wurde angenommen",
                sender: "System",
                type: "text",
            });
        });
        socket.on("Am Zug", (card) => {
            rooms[room].createCheckObject();
            console.log("Am Zug: " + card);
            console.log("Counter: " + rooms[room].gelegt);
            rooms[room].tischCardsObject.push({
                ...card,
                position: rooms[room].gelegt,
            });
            rooms[room].gelegt += 1;
            rooms[room].tischCards[rooms[room].amZug] = card.name;
            io.to(room).emit("tischkarten", rooms[room].tischCards);

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
                console.log("Gewonnen: ");
                let gewonnen = kartenMaster.getBestKarte(
                    rooms[room].createCheckObject(),
                    2
                );
                console.log(gewonnen);
                let gewonnenPos = rooms[room].gewinnerPos(gewonnen.position);
                console.log("GewonnePos " + gewonnenPos);
                if (rooms[room].stich === 0) {
                    io.to(room).emit("stich", gewonnenPos);
                }

                rooms[room].userStatus = [];
                rooms[room].userStatus[gewonnenPos] = "🏆Gestochen🏆";
                io.to(room).emit("status", rooms[room].userStatus);
                rooms[room].stich += 1;
                rooms[room].addStichToTeam(gewonnenPos);
                if (rooms[room].stich === 2) {
                    console.log("hide JUNGE");
                    io.to(room).emit("hide Stich");
                }
                setTimeout(() => {
                    if (rooms[room].won()) {
                        //wenn ein Team 3 Punkte hat
                        let punkte = rooms[room].getTeamPunkte();
                        io.to(room).emit("punkte", punkte);

                        if (rooms[room].isTeam1Gestrichen()) {
                            io.to(room).emit("team1 gestrichen");
                        }
                        if (rooms[room].isTeam2Gestrichen()) {
                            io.to(room).emit("team2 gestrichen");
                        }

                        let winningTeam = rooms[room].checkWin();
                        if (winningTeam !== 0) {
                            console.log("Jemand hat gewonnen");
                            io.to(room).emit("win", winningTeam);
                            setTimeout(() => {
                                if (rooms[room].freePos.length === 0) {
                                    console.log("ddat spiel beginnt");
                                    io.to(room).emit("chat", {
                                        message: `Das Spiel beginnt`,
                                        sender: "System",
                                        type: "text",
                                    });
                                    rooms[room].neuesSpiel();
                                    io.to(room).emit("reset");

                                    kartenMaster.kartenMischen();
                                    kartenMaster.kartenAusteilen();
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
                            kartenMaster.kartenMischen();
                            kartenMaster.kartenAusteilen();
                            io.to(room).emit("karten", rooms[room].userCards);
                            rooms[room].userStatus[rooms[room].schlagPos] =
                                "Schlag";
                            rooms[room].userStatus[rooms[room].trumpfPos] =
                                "Trumpf";
                            io.to(room).emit("status", rooms[room].userStatus);
                            io.to(room).emit(
                                "tischkarten",
                                rooms[room].tischCards
                            );

                            console.log("gewonnen");
                        }
                    } else {
                        rooms[room].resetAfterStich(gewonnenPos);
                        rooms[room].userStatus = [];
                        rooms[room].userStatus[rooms[room].amZug] = "Am Zug";
                        io.to(room).emit("reset nach stich", {
                            status: rooms[room].userStatus,
                            karten: rooms[room].tischCards,
                            stiche: rooms[room].userStiche,
                        });
                    }

                    //neu ziehen
                }, 7000);
                //gewinner ziehen und neu legen
            }
        });

        socket.on("disconnect", () => {
            rooms[room].removeUser(user);
            socket.to(room).emit("players", {
                userPos: rooms[room].userPos,
                userTeam: rooms[room].userTeam,
                userStiche: rooms[room].userStiche,
                userStatus: rooms[room].userStatus,
            });
            let reset = rooms[room].tryNeueRunde();
            if (reset) {
                socket.to(room).emit("neue Runde");
                socket.to(room).emit("reset status");
            }
            if (rooms[room].freePos.length === 4) {
                delete rooms[room];
                console.log("delete");
                let i = 0;
                let roomsSend = [];
                for (var key in rooms) {
                    roomsSend[i] = rooms[key].getNecessary();
                    i++;
                }
                socket.broadcast.emit("rooms", roomsSend);
            }
            socket.to(room).emit("chat", {
                message: `${user} disconnect`,
                sender: "System",
                type: "text",
            });
        });
    });
});

http.listen(8080, () => console.log("listening on http://localhost:8080"));
