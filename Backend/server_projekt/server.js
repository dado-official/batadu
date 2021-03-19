const express = require("express");
const http = require("http").createServer();
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});
const Spiel = require("./Spiel");
const Karten = require("./Karten");

const karten = Karten();
const spiel = new Spiel();

io.on("connection", (socket) => {
  if (userId.length === 0) {
    console.log("full");
    socket.emit("forceDisconnect");
  } else {
    let id = userId.shift();
    socketId[id] = socket.id;

    socket.emit("id", id);
    if (userId.length === 0) {
      //when the game can start
      let kartenFuerSpieler = [];
      karten.neueKarten();
      karten.mischen();
      for (let i = 0; i < 4; i++) {
        isFarbeSelected = false;
        isSchalgSelected = false;
        kartenFuerSpieler[i] = karten.getKarten(); //getting cards for users
        io.to(socketId[i]).emit("karten", kartenFuerSpieler[i]);
      }
      //select schlag and farbe
      io.to(socketId[schlagId]).emit("selectSchlag");
      io.to(socketId[farbeId]).emit("selectFarbe");
    }
    //get schlag und farbe
    socket.on("selectedSchlag", (data) => {
      spiel.isSchalgSelected = true;
      spiel.schlag = data;
      if (data === "Welli") spiel.batadu = data;
      else spiel.batadu = data.split(" ")[1];
      //send to the other typ
      if (spiel.isFarbeSelected) {
        sendSelection();
      }
    });
    socket.on("selectedFarbe", (data) => {
      spiel.farbe = data;
      isFarbeSelected = true;
      //send to the other typ
      if (isSchalgSelected) {
        sendSelection();
      }
    });

    function sendSelection() {
      io.to(socketId[farbeId]).emit("schlag", schlag);
      io.to(socketId[schlagId]).emit("farbe", farbe);
      if (farbe !== "Welli") farbe = farbe.split(" ")[0];
      else farbe = "Schell";
      setBeschter();
      canKarteLegen();
    }

    socket.on("karteGelegt", (karte) => {
      console.log(karte);
      io.emit("karteGelegt", karte);
      if (legenCounter === 1) winningKarte = karte;
      else betterCard(karte);
      console.log("Winning Karte: " + winningKarte);
      canKarteLegen();
    });

    function canKarteLegen() {
      if (legenCounter < 4) {
        io.to(socketId[istDran]).emit("karteLegen");
        istDran = nextId(istDran);
        legenCounter++;
      }
    }
    socket.on("disconnect", () => {
      userId.push(id);
    });
  }
});

http.listen(8080, () => console.log("listening on http://localhost:8080"));
