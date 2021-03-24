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
        io.to(room).emit("players", rooms[room].userPos);

        socket.to(room).emit("chat", {
            //sending to the chat who joined
            message: `${user} ist dem Spiel beigetreten`,
            sender: "System",
            type: "text",
        });

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
        }

        socket.on("chat", (message) => {
            //broadcast to roommembers when new message
            io.to(room).emit("chat", message);
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
