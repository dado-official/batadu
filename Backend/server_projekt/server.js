const express = require("express");
const { emit } = require("process");
const http = require("http").createServer();
const io = require("socket.io")(http, {
    cors: { origin: "*" },
});
const KartenMaster = require("./GameElements/KartenMaster");
const Room = require("./GameElements/Room");

let counter = 0;
let rooms = []; //array for all rooms

rooms["Hirte"] = new Room({ userAnzahl: 4 });
kartenMaster = new KartenMaster(rooms["Hirte"]);
kartenMaster.kartenMischen();

io.on("connection", (socket) => {
    console.log("New Connection");

    socket.on("createRoom", (config) => {
        rooms[config.name] = new Room(config);

        kartenMaster = new KartenMaster(rooms[config.name]);
        kartenMaster.kartenMischen();
    });

    socket.on("joinRoom", (data) => {
        //client joining a room
        let room = data.room;
        let user = data.user;

        if (rooms[room] === undefined) {
            socket.emit("roomNotExist");
            return;
        }
        let pos = rooms[room].addUser(user);

        socket.emit("roomExist"); //saying to the client that the room exists

        console.log("Room name: " + room);

        socket.join(room); //joinig a room
        io.to(room).emit("joinRoom", counter);
        socket.emit("pos");
        io.to(room).emit("players", {
            userPos: rooms[room].userPos,
            userTeam: rooms[room].userTeam,
            userStiche: rooms[room].userStiche,
            userStatus: rooms[room].userStatus,
        });

        /*socket.to(room).emit("chat", {
            //sending to the chat who joined
            message: `${user} ist dem Spiel beigetreten`,
            sender: "System",
            type: "text",
        }); */

        console.log("Länge " + rooms[room].userPos.length);
        //Hier beginnt das Spiel :)
        if (rooms[room].userPos.length === 4) {
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
                io.to(room).emit("status", rooms[room].userStatus);
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
                io.to(room).emit("status", rooms[room].userStatus);
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
                io.to(room).emit("status", rooms[room].userStatus);
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
                        io.to(room).emit("tischkarten", rooms[room].tischCards);

                        console.log("gewonnen");
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
            console.log(rooms);
            socket.to(room).emit("chat", {
                message: `${user} disconnect`,
                sender: "System",
                type: "text",
            });
        });
    });
});

http.listen(8080, () => console.log("listening on http://localhost:8080"));
