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

            kartenMaster.kartenAusteilen();
            io.to(room).emit("karten", rooms[room].userCards);
            rooms[room].userStatus[0] = "Schlag";
            rooms[room].userStatus[1] = "Trumpf";
            io.to(room).emit("status", rooms[room].userStatus);
        }

        socket.on("chat", (message) => {
            //broadcast to roommembers when new message
            socket.to(room).emit("chat", message);
        });

        socket.on("Schlag", (card) => {
            io.to(room).emit("chat", {
                message: `Schlag wurde gewählt`,
                sender: "System",
                type: "text",
            });
            rooms[room].schlag = card;
            console.log("Trumpf Gewählt: " + rooms[room].trumpfGewaelt);
            if (rooms[room].trumpfGewaelt) {
                io.to(room).emit("karten sehen");
                io.to(room).emit("schlag trumpf", {
                    schlag: rooms[room].schlag,
                    trumpf: rooms[room].trumpf,
                });
                rooms[room].userStatus = [];
                rooms[room].userStatus[0] = "Am Zug";
                io.to(room).emit("status");
            }
            rooms[room].schlagGewaelt = true;
        });

        socket.on("Trumpf", (card) => {
            io.to(room).emit("chat", {
                message: `Trumpf wurde gewählt`,
                sender: "System",
                type: "text",
            });
            rooms[room].trumpf = card;
            console.log("Schlag Gewählt: " + rooms[room].schlagGewaelt);
            if (rooms[room].schlagGewaelt) {
                io.to(room).emit("karten sehen");
                io.to(room).emit("schlag trumpf", {
                    schlag: rooms[room].schlag,
                    trumpf: rooms[room].trumpf,
                });
                rooms[room].userStatus = [];
                rooms[room].userStatus[0] = "Am Zug";
                io.to(room).emit("status", rooms[room].userStatus);
            }
            rooms[room].trumpfGewaelt = true;
        });
        socket.on("Am Zug", (card) => {
            console.log("Am Zug: " + card);
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
