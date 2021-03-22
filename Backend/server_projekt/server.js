const express = require("express");
const http = require("http").createServer();
const io = require("socket.io")(http, {
    cors: { origin: "*" },
});

let counter = 0;

io.on("connection", (socket) => {
    console.log("sepp");
    let myRoom;
    socket.on("joinRoom", (room) => {
        console.log("Room name: " + room);
        myRoom = room;
        socket.join(room);
        io.to(room).emit("joinRoom", counter);
        counter++;
        socket.to(room).emit("chat", {
            message: `${counter} ist dem Spiel beigetreten`,
            sender: "System",
        });
        socket.on("chat", (message) => {
            socket.to(room).emit("chat", message);
        });
    });
});

http.listen(8080, () => console.log("listening on http://localhost:8080"));
