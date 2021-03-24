let Pool = require("pg").Pool;
const express = require("express");
const app = express();
const databaseConfig = require("./databaseConf.json");
const pool = new Pool(databaseConfig);

app.use(express.json());

//CORS
app.all("/", function (req, res, next) {
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get("/user", ((req, res) => {
    pool.query(
        "SELECT * FROM public.users WHERE username = $1",
        [req.body.username],
        (error, results) => {
            if(error){
                throw error;
            }
            res.status(200).json(results.rows);
        }
    )
}));

app.get("/user/game", (((req, res) => {
    pool.query(
        "SELECT spiel.id, spiel.name, spiel.password, spiel.datum FROM public.spiel, public.team, public.spielen_in, public.users WHERE team.id = spielen_in.teamid AND users.username = spielen_in.usersusername AND team.spielid = spiel.id AND users.username = $1",
        [req.body.username],
        (error, results) => {
            if(error){
                throw error;
            }
            res.status(200).json(results.rows);
        }
    )
})));

app.get("/user/stats", (((req, res) => {
    pool.query(
        "SELECT users.anzstiche, users.punkte, users.gewonnenespiele, users.verlorenespiele FROM public.users WHERE users.username = $1",
        [req.body.username],
        (error, results) => {
            if(error){
                throw error;
            }
            let sticheprospiel = results.rows[0].anzstiche / (results.rows[0].gewonnenespiele + results.rows[0].verlorenespiele);
            let winrate = Math.round(((results.rows[0].gewonnenespiele / (results.rows[0].gewonnenespiele + results.rows[0].verlorenespiele)) * 100 + Number.EPSILON) * 100) / 100;
            let stats = {anzstiche: results.rows[0].anzstiche, punkte: results.rows[0].punkte, gewonnenespiele: results.rows[0].gewonnenespiele, verlorenespiele: results.rows[0].verlorenespiele, sticheprospiel: sticheprospiel, winrate: winrate};
            res.status(200).json(stats);
        }
    )
})))

app.listen(3000);