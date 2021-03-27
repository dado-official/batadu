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

//Gets all information of a user passed via .JSON
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

//Gets all the games in which a user participated
app.get("/user/games", (((req, res) => {
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

//Gets stats from a user, like won and lost games, winrate, "stiche" and "stiche"/game
app.get("/user/stats", (((req, res) => {
    pool.query(
        "SELECT users.anzstiche, users.punkte, users.gewonnenespiele, users.verlorenespiele FROM public.users WHERE users.username = $1",
        [req.body.username],
        (error, results) => {
            if(error){
                throw error;
            }
            let sticheprospiel = Math.round(results.rows[0].anzstiche / (results.rows[0].gewonnenespiele + results.rows[0].verlorenespiele) * 100) / 100;
            let winrate = Math.round(((results.rows[0].gewonnenespiele / (results.rows[0].gewonnenespiele + results.rows[0].verlorenespiele)) * 100 + Number.EPSILON) * 100) / 100;
            let stats = {anzstiche: results.rows[0].anzstiche, punkte: results.rows[0].punkte, gewonnenespiele: results.rows[0].gewonnenespiele, verlorenespiele: results.rows[0].verlorenespiele, sticheprospiel: sticheprospiel, winrate: winrate};
            res.status(200).json(stats);
        }
    )
})));

//Gets a level based on the amount of points
app.get("/level", (((req, res) => {
    let punkte = req.body.punkte;
    pool.query(
        "SELECT * FROM public.level WHERE erforderlichepunkte < $1 ORDER BY erforderlichepunkte DESC",
        [punkte],
        (error, results) => {
            if(error){
                throw error;
            }
            let currentlevel = results.rows[0];
            pool.query(
                "SELECT * FROM public.level WHERE nr = $1",
                [currentlevel.nr + 1],
                (err, result) => {
                    if(err){
                        throw err;
                    }
                    let nextlevel = result.rows[0];
                    let response = {punkte, currentlevel, nextlevel};
                    res.status(200).json(response);
                }
            )
        }
    )
})));

//Gets the current level of a specific user
app.get("/user/level", (((req, res) => {
    let username = req.body.username;
    pool.query(
        "SELECT punkte FROM public.users WHERE username = $1",
        username,
        (error, results) => {
            if(error){
                throw error;
            }
            let punkte = results.rows[0].punkte;
            if(punkte === 0){
                let currentlevel = {nr: 0, erforderlichepunkte: 0};
                let nextlevel = {nr: 1, erforderlichepunkte: 20};
                let response = {username: username[0], punkte, currentlevel, nextlevel};
                res.status(200).json(response);
                return;
            }
            pool.query(
                "SELECT * FROM public.level WHERE erforderlichepunkte < $1 ORDER BY erforderlichepunkte DESC",
                [punkte],
                (error, results) => {
                    if(error){
                        throw error;
                    }
                    let currentlevel = results.rows[0];
                    pool.query(
                        "SELECT * FROM public.level WHERE nr = $1",
                        [currentlevel.nr + 1],
                        (err, result) => {
                            if(err){
                                throw err;
                            }
                            let nextlevel = result.rows[0];
                            let response = {username: username[0], punkte, currentlevel, nextlevel};
                            res.status(200).json(response);
                        }
                    )
                }
            )
        }
    )
})));

//Checks the users credentials to log in
app.get("/user/login", (((req, res) => {
    let username = [req.body.username];
    let password = req.body.password;
    pool.query(
        "SELECT password FROM public.users WHERE username = $1",
        username,
        (error, results) => {
            if(error){
                throw error;
            }
            if(results.rows[0].password === password){
                let response = {username: username[0], login: "OK"};
                res.status(200).json(response);
            } else {
                let response = {username: username[0], login: "FAILED"};
                res.status(401).json(response);
            }
        }
    )
})));

//Gets the best players, how many can be passed via .JSON
app.get("/rankings", (((req, res) => {
    pool.query(
        "SELECT username, punkte FROM public.users ORDER BY punkte DESC LIMIT $1",
        [req.body.limit],
        (error, results) => {
            if(error){
                throw error;
            }
            res.status(200).json(results.rows);
        }
    )
})));

app.listen(3000);