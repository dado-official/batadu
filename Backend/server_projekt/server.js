const express = require("express");
const http = require("http").createServer();
const io = require("socket.io")(http, {
    cors: { origin: "*" },
});

let counter = 0;

io.on("connection", (socket) => {
    console.log("New Connection");
    socket.on("joinRoom", (room) => {
        //client joining a new room
        console.log("Room name: " + room);
        myRoom = room;
        socket.join(room); //joinig a room
        io.to(room).emit("joinRoom", counter);
        counter++;
        socket.to(room).emit("chat", {
            //sending to the chat who joined
            message: `${counter} ist dem Spiel beigetreten`,
            sender: "System",
        });
        socket.on("chat", (message) => {
            //broadcast to roommembers when new message
            socket.to(room).emit("chat", message);
        });
        socket.on("disconnect", () => {
            socket
                .to(room)
                .emit("chat", { message: "Disconnect", sender: "System" });
        });
    });
});

http.listen(8080, () => console.log("listening on http://localhost:8080"));
