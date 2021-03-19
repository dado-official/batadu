console.log("start server");
const express = require("express");
const app = express();
const http = require("http").createServer();
//const Spiel = require("./GameElements/Spiel");
//const spiel = new Spiel();
const bodyParser = require("body-parser");
const ArrayList = require("arraylist");
const KartenMaster = require("./GameElements/KartenMaster")
const io = require("socket.io")(http, {
  cors: { origin: "*" },
});
let Room = require("./GameElements/Room");
let cors = require("cors");
let rooms_list = new ArrayList(); //array for all rooms



app.use(cors());
app.use(bodyParser.json());
app.get("/", function (req, res) {
  res.send("Hello Worldlul!");
});
//create Room
app.listen(3000, () => console.log("listening on http://localhost:3000"));

//create a new room
app.post("/room", (req, res) => {
  console.log("/room");
  let position = rooms_list.set(req.body.roomname, new Room(req.body));
  res.status(201).send(position);
});

//join a room
app.post("/room/join", (req, res) => {
  console.log("/room/join");
  console.log(req.body.roomname);
  let position = rooms_list
    .get(req.body.roomname)
    .addPerson(req.body.personalInfo);
  res.status(200).send(position);
});

//leave room
app.post("/room/leave", (req, res) => {
  console.log("/room/leave");
  rooms_list.get(req.body.roomname).leaveRoom(req.body.personalInfo);
  res.status(200).send("room left successfully");
});

//testprint
app.post("/room/print", (req, res) => {
  console.log("/room/print");
  console.log(rooms_list);
  res.status(200).send("print");
});

//testKarten
app.post("/room/karten", (req, res) => {
  console.log("/room/karten");
  let km = new KartenMaster();
  km.kartenMischen()
  res.status(200).send("print");
});

//testKartenausteilen
app.post("/room/karten/austeilen", (req, res) => {
  console.log("/room/karten/austeilen");
  let km = new KartenMaster();
  km.kartenMischen();
  km.kartenAusteilen(rooms_list.get("testroom"));
  res.status(200).send("print");
});

//io.on('connection', (socket) => {
//    console.log("Socket: Client connected");
//    socket.emit("message", "Welcome!");
//
//});
//

//io.on("connection", (socket) => {
//    console.log("connected")
//    if (userId.length === 0) {
//        console.log("full");
//        socket.emit("forceDisconnect");
//    } else {
//        console.log("succesfully connected")
//
//        console.log("connected success")
//        let id = userId.shift();
//        socketId[id] = socket.id;
//
//        socket.emit("id", id);
//        if (userId.length === 0) {
//            //when the game can start
//            let kartenFuerSpieler = [];
//            karten.neueKarten();
//            karten.mischen();
//            for (let i = 0; i < 4; i++) {
//                isFarbeSelected = false;
//                isSchalgSelected = false;
//                kartenFuerSpieler[i] = karten.getKarten(); //getting cards for users
//                io.to(socketId[i]).emit("karten", kartenFuerSpieler[i]);
//            }
//            //select schlag and farbe
//            io.to(socketId[schlagId]).emit("selectSchlag");
//            io.to(socketId[farbeId]).emit("selectFarbe");
//        }
//        //get schlag und farbe
//        socket.on("selectedSchlag", (data) => {
//            spiel.isSchalgSelected = true;
//            spiel.schlag = data;
//            if (data === "Welli") spiel.batadu = data;
//            else spiel.batadu = data.split(" ")[1];
//            //send to the other typ
//            if (spiel.isFarbeSelected) {
//                sendSelection();
//            }
//        });
//        socket.on("selectedFarbe", (data) => {
//            spiel.farbe = data;
//            isFarbeSelected = true;
//            //send to the other typ
//            if (isSchalgSelected) {
//                sendSelection();
//            }
//        });
//
//        function sendSelection() {
//            io.to(socketId[farbeId]).emit("schlag", schlag);
//            io.to(socketId[schlagId]).emit("farbe", farbe);
//            if (farbe !== "Welli") farbe = farbe.split(" ")[0];
//            else farbe = "Schell";
//            setBeschter();
//            canKarteLegen();
//        }
//
//        socket.on("karteGelegt", (karte) => {
//            console.log(karte);
//            io.emit("karteGelegt", karte);
//            if (legenCounter === 1) winningKarte = karte;
//            else betterCard(karte);
//            console.log("Winning Karte: " + winningKarte);
//            canKarteLegen();
//        });
//
//        function canKarteLegen() {
//            if (legenCounter < 4) {
//                io.to(socketId[istDran]).emit("karteLegen");
//                istDran = nextId(istDran);
//                legenCounter++;
//            }
//        }
//        socket.on("disconnect", () => {
//            userId.push(id);
//        });
//    }
//});
