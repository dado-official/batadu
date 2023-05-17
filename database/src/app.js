let Pool = require("pg").Pool;
const express = require("express");
const app = express();
const databaseConfig = require("./databaseConf.json");
require("dotenv").config();
const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: parseInt(process.env.PORT, 10),
});

const asyncHandler = require("express-async-handler");
const cors = require("cors");

const bcrypt = require("bcrypt");
const saltRounds = 10;

const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const pgSession = require("connect-pg-simple")(session);

require("dotenv").config();

app.set("trust proxy", 1);
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:3000"],
        methods: ["GET", "POST", "DELETE"],
        credentials: true,
    })
);
app.use(
    session({
        store: new pgSession({
            pool: pool,
        }),
        secret: process.env.SESSION_SECRET,
        saveUninitialized: true,
        resave: false,
        cookie: {
            httpOnly: true,
            maxAge: 86400000 * 30,
        },
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

//Checks the users credentials to log in
app.post("/user/login", (req, res) => {
    let username = [req.body.username];
    let password = req.body.password;

    pool.query(
        "SELECT * FROM public.users WHERE username = $1",
        username,
        (error, results) => {
            if (error) {
                res.status(400).send();
            }
            if (results.rowCount === 0) {
                res.status(400).send();
            } else {
                if (results.rows.length > 0) {
                    bcrypt.compare(
                        password,
                        results.rows[0].password,
                        (error, response) => {
                            if (response) {
                                req.session.user = username[0];
                                res.json({
                                    username: username[0],
                                });
                            } else {
                                let response = {
                                    username: username[0],
                                    login: "FAILED",
                                };
                                res.status(401).json(response);
                            }
                        }
                    );
                } else {
                    let response = { username: username[0], login: "FAILED" };
                    res.status(401).json(response);
                }
            }
        }
    );
});

app.get("/user/login", (req, res) => {
    console.log(req.session);
    if (req.session.user) {
        res.send({ user: req.session.user });
    } else {
        res.status(401).json("No");
    }
});

app.delete("/user/login", (req, res) => {
    console.log("Destory session");
    req.session.destroy();
    res.send("Destroyed");
});

//Registers a user
app.post("/register", (req, res) => {
    const { username, password } = req.body;

    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err);
        }

        pool.query(
            "INSERT INTO public.users VALUES ($1, $2, $3, 0, 0, 0, 0)",
            [username, hash, req.body.email],
            (error, results) => {
                if (error) {
                    res.status(400).send();
                }
                req.session.user = username;
                res.status(200).send();
            }
        );
    });
});

// Gets all information of a user passed via .JSON
app.get("/user", (req, res) => {
    pool.query(
        "SELECT * FROM public.users WHERE username = $1",
        [req.body.username],
        (error, results) => {
            if (error) {
                throw error;
            }
            res.status(200).json(results.rows);
        }
    );
});

//Gets all the games in which a user participated
app.get(
    "/user/games",
    asyncHandler(async (req, res) => {
        let gameinfos = await pool.query(
            "SELECT spiel.id, spiel.datum, spielen_in.stiche, spielen_in.teamid FROM public.spiel, public.team, public.spielen_in, public.users WHERE team.id = spielen_in.teamid AND users.username = spielen_in.usersusername AND team.spielid = spiel.id AND users.username = $1",
            [req.query.username]
        );
        let teams = await getteampoints(
            gameinfos.rows[0].id,
            gameinfos.rows[0].teamid
        );
        let returns;
        if (teams.myteampoints > teams.otherteampoints) {
            returns = [
                {
                    gameid: gameinfos.rows[0].id,
                    gamedate: gameinfos.rows[0].datum,
                    mystiche: gameinfos.rows[0].stiche,
                    amiawinner: true,
                    wonpoints: 20,
                    teams,
                },
            ];
        } else {
            returns = [
                {
                    gameid: gameinfos.rows[0].id,
                    gamedate: gameinfos.rows[0].datum,
                    mystiche: gameinfos.rows[0].stiche,
                    amiawinner: false,
                    wonpoints: 5,
                    teams,
                },
            ];
        }
        for (let i = 1; i < gameinfos.rowCount; i++) {
            teams = await getteampoints(
                gameinfos.rows[i].id,
                gameinfos.rows[i].teamid
            );
            if (teams.myteampoints > teams.otherteampoints) {
                returns.push({
                    gameid: gameinfos.rows[i].id,
                    gamedate: gameinfos.rows[i].datum,
                    mystiche: gameinfos.rows[i].stiche,
                    amiawinner: true,
                    wonpoints: 20,
                    teams,
                });
            } else {
                returns.push({
                    gameid: gameinfos.rows[i].id,
                    gamedate: gameinfos.rows[i].datum,
                    mystiche: gameinfos.rows[i].stiche,
                    amiawinner: false,
                    wonpoints: 5,
                    teams,
                });
            }
        }
        res.status(200).json(returns);
    })
);

async function getteampoints(gameid, myteamid) {
    let teams = await pool.query(
        "SELECT team.id, team.punkte FROM public.team WHERE team.spielid = $1",
        [gameid]
    );
    if (teams.rows[0].id === myteamid) {
        return {
            myteampoints: teams.rows[0].punkte,
            otherteampoints: teams.rows[1].punkte,
        };
    } else if (teams.rows[1].id === myteamid) {
        return {
            myteampoints: teams.rows[1].punkte,
            otherteampoints: teams.rows[0].punkte,
        };
    } else {
        return { myteampoints: null, otherteampoints: null };
    }
}

//Gets stats from a user, like won and lost games, winrate, "stiche" and "stiche"/game
app.get(
    "/user/stats",
    asyncHandler(async (req, res) => {
        let results = await pool.query(
            "SELECT users.anzstiche, users.punkte, users.gewonnenespiele, users.verlorenespiele FROM public.users WHERE users.username = $1",
            [req.query.username]
        );
        console.log("1");
        if (results.rowCount === 0) {
            res.status(400).send();
            return;
        }
        let level = await pool.query(
            "SELECT * FROM public.level WHERE erforderlichepunkte < $1 ORDER BY erforderlichepunkte DESC",
            [results.rows[0].punkte]
        );
        console.log("2.5");
        let anzspieler = await pool.query("SELECT COUNT(*) FROM public.users");
        console.log("Anspieler: " + anzspieler);
        if (anzspieler.rowCount === 0) {
            res.status(400).send();
            return;
        }
        console.log("3");
        let sticheprospiel =
            Math.round(
                (results.rows[0].anzstiche /
                    (results.rows[0].gewonnenespiele +
                        results.rows[0].verlorenespiele)) *
                    100
            ) / 100;
        let winrate =
            Math.round(
                ((results.rows[0].gewonnenespiele /
                    (results.rows[0].gewonnenespiele +
                        results.rows[0].verlorenespiele)) *
                    100 +
                    Number.EPSILON) *
                    100
            ) / 100;
        let stats = {
            anzstiche: results.rows[0].anzstiche,
            punkte: results.rows[0].punkte,
            gewonnenespiele: results.rows[0].gewonnenespiele,
            verlorenespiele: results.rows[0].verlorenespiele,
            sticheprospiel: sticheprospiel,
            winrate: winrate,
            level: level.rows[0] ? level.rows[0].nr : 0,
            anzspieler: anzspieler.rows[0].count,
        };
        res.status(200).json(stats);
    })
);

//Gets a level based on the amount of points
app.get("/level", (req, res) => {
    let punkte = req.body.points;
    pool.query(
        "SELECT * FROM public.level WHERE erforderlichepunkte <= $1 ORDER BY erforderlichepunkte DESC",
        [punkte],
        (error, results) => {
            if (error) {
                throw error;
            }
            let currentlevel = results.rows[0];
            pool.query(
                "SELECT * FROM public.level WHERE nr = $1",
                [currentlevel.nr + 1],
                (err, result) => {
                    if (err) {
                        throw err;
                    }
                    let nextlevel = result.rows[0];
                    let response = { punkte, currentlevel, nextlevel };
                    res.status(200).json(response);
                }
            );
        }
    );
});

//Gets the current level of a specific user
app.get("/user/level", (req, res) => {
    let username = req.query.username;
    pool.query(
        "SELECT punkte FROM public.users WHERE username = $1",
        [username],
        (error, results) => {
            if (error) {
                throw error;
            }
            let punkte = results.rows[0].punkte;
            if (punkte === 0) {
                let currentlevel = { nr: 0, erforderlichepunkte: 0 };
                let nextlevel = { nr: 1, erforderlichepunkte: 20 };
                let response = {
                    username: username,
                    punkte,
                    currentlevel,
                    nextlevel,
                };
                res.status(200).json(response);
                return;
            }
            pool.query(
                "SELECT * FROM public.level WHERE erforderlichepunkte <= $1 ORDER BY erforderlichepunkte DESC",
                [punkte],
                (error, results) => {
                    if (error) {
                        throw error;
                    }
                    let currentlevel = results.rows[0];
                    pool.query(
                        "SELECT * FROM public.level WHERE nr = $1",
                        [currentlevel.nr + 1],
                        (err, result) => {
                            if (err) {
                                throw err;
                            }
                            let nextlevel = result.rows[0];
                            let response = {
                                username: username,
                                punkte,
                                currentlevel,
                                nextlevel,
                            };
                            res.status(200).json(response);
                        }
                    );
                }
            );
        }
    );
});

//Gets the best players, how many can be passed via .JSON
app.get("/rankings", (req, res) => {
    pool.query(
        "SELECT username, punkte, gewonnenespiele, verlorenespiele FROM public.users ORDER BY punkte DESC LIMIT $1",
        [req.body.limit],
        (error, results) => {
            if (error) {
                throw error;
            }
            let ranking = [];
            for (let i = 0; i < results.rowCount; i++) {
                let winrate =
                    Math.round(
                        ((results.rows[i].gewonnenespiele /
                            (results.rows[i].gewonnenespiele +
                                results.rows[i].verlorenespiele)) *
                            100 +
                            Number.EPSILON) *
                            100
                    ) / 100;
                ranking.push({
                    username: results.rows[i].username,
                    winrate: winrate,
                    wongames: results.rows[i].gewonnenespiele,
                    points: results.rows[i].punkte,
                });
            }
            res.status(200).json(ranking);
        }
    );
});

//Checks if a username and email are available
app.get(
    "/user/check",
    asyncHandler(async (req, res) => {
        let usercheck = await pool.query(
            "SELECT username FROM public.users WHERE username = $1",
            [req.params.username]
        );
        let takenusername = false;
        if (usercheck.rowCount > 0) {
            takenusername = true;
        }

        let emailcheck = await pool.query(
            "SELECT email FROM public.users WHERE email = $1",
            [req.params.email]
        );
        let takenemail = false;
        if (emailcheck.rowCount > 0) {
            takenemail = true;
        }

        if (takenusername && takenemail) {
            res.status(409).json({ taken: "both" });
        } else if (takenusername) {
            res.status(409).json({ taken: "username" });
        } else if (takenemail) {
            res.status(409).json({ taken: "email" });
        } else {
            res.status(200).send();
        }
    })
);

//Sets all results of a past game
app.post(
    "/game/results",
    asyncHandler(async (req, res) => {
        //Check if a user exists
        let results = await pool.query(
            "SELECT username FROM public.users WHERE username = $1 OR username = $2 OR username = $3 OR username = $4",
            [
                req.body.team1user1,
                req.body.team1user2,
                req.body.team2user1,
                req.body.team2user2,
            ]
        );
        if (results.rowCount === 0) {
            res.status(400).send();
            return;
        }
        let gameid = await insertgame(req, res);
        let teamids = await insertteams(req, res, gameid);
        if (req.body.gewinnerteam === 1) {
            insertwinner(res, teamids.team1id, gameid);
            updateuser(
                true,
                req.body.team1stichespieler1,
                req.body.team1user1,
                res
            );
            updateuser(
                true,
                req.body.team1stichespieler2,
                req.body.team1user2,
                res
            );
            updateuser(
                false,
                req.body.team2stichespieler1,
                req.body.team2user1,
                res
            );
            updateuser(
                false,
                req.body.team2stichespieler2,
                req.body.team2user2,
                res
            );
        } else if (req.body.gewinnerteam === 2) {
            insertwinner(res, teamids.team2id, gameid);
            updateuser(
                false,
                req.body.team1stichespieler1,
                req.body.team1user1,
                res
            );
            updateuser(
                false,
                req.body.team1stichespieler2,
                req.body.team1user2,
                res
            );
            updateuser(
                true,
                req.body.team2stichespieler1,
                req.body.team2user1,
                res
            );
            updateuser(
                true,
                req.body.team2stichespieler2,
                req.body.team2user2,
                res
            );
        }
        await bindusers(req, res, teamids);
        res.status(200).json({ gameid: gameid, teamids: teamids });
    })
);

async function insertgame(req, res) {
    let queryres;
    if (req.body.spielname === undefined) {
        res.status(400).send();
    }
    if (req.body.spielpwd === "" || req.body.spielpwd === undefined) {
        queryres = await pool.query(
            "INSERT INTO public.spiel VALUES (DEFAULT, $1, NULL, DEFAULT)  RETURNING id",
            [req.body.spielname]
        );
    } else {
        queryres = await pool.query(
            "INSERT INTO public.spiel VALUES (DEFAULT, $1, $2, DEFAULT) RETURNING id",
            [req.body.spielname, req.body.spielpwd]
        );
    }
    return queryres.rows[0].id;
}

async function insertteams(req, res, gameid) {
    //Team 1 einfuegen
    let team1id = await pool.query(
        "INSERT INTO public.team VALUES (DEFAULT, $1, $2, $3, $4) RETURNING id",
        [
            req.body.team1punkte,
            req.body.team1stichespieler1,
            req.body.team1stichespieler2,
            gameid,
        ]
    );
    //Team 2 einfuegen
    let team2id = await pool.query(
        "INSERT INTO public.team VALUES (DEFAULT, $1, $2, $3, $4) RETURNING id",
        [
            req.body.team2punkte,
            req.body.team2stichespieler1,
            req.body.team2stichespieler2,
            gameid,
        ]
    );
    return { team1id: team1id.rows[0].id, team2id: team2id.rows[0].id };
}

function insertwinner(res, teamid, gameid) {
    pool.query(
        "INSERT INTO public.gewinner VALUES ($1, $2)",
        [teamid, gameid],
        (error, results) => {
            if (error) {
                res.status(400).send();
            }
        }
    );
}

async function bindusers(req, res, teamids) {
    //Bind Team 1 users
    pool.query(
        "INSERT INTO public.spielen_in VALUES ($1, $2, $3)",
        [teamids.team1id, req.body.team1user1, req.body.team1stichespieler1],
        (error, results) => {
            if (error) {
                res.status(400).send();
            }
        }
    );
    pool.query(
        "INSERT INTO public.spielen_in VALUES ($1, $2, $3)",
        [teamids.team1id, req.body.team1user2, req.body.team1stichespieler2],
        (error, results) => {
            if (error) {
                res.status(400).send();
            }
        }
    );

    //Bind Team 2 users
    pool.query(
        "INSERT INTO public.spielen_in VALUES ($1, $2, $3)",
        [teamids.team2id, req.body.team2user1, req.body.team2stichespieler1],
        (error, results) => {
            if (error) {
                res.status(400).send();
            }
        }
    );
    pool.query(
        "INSERT INTO public.spielen_in VALUES ($1, $2, $3)",
        [teamids.team2id, req.body.team2user2, req.body.team1stichespieler2],
        (error, results) => {
            if (error) {
                res.status(400).send();
            }
        }
    );
}

function updateuser(won, addedstiche, username, res) {
    pool.query(
        "SELECT anzstiche, punkte, gewonnenespiele, verlorenespiele FROM public.users WHERE username = $1",
        [username],
        (error, results) => {
            if (error) {
                res.status(400).send();
            }
            let newstiche;
            if (results.rows[0].anzstiche === undefined) {
                newstiche = addedstiche;
            } else {
                newstiche = results.rows[0].anzstiche + addedstiche;
            }
            if (won) {
                let newpoints = results.rows[0].punkte + 20 + addedstiche;
                let newwongames = results.rows[0].gewonnenespiele + 1;
                pool.query(
                    "UPDATE public.users SET anzstiche = $1, punkte = $2, gewonnenespiele = $3 WHERE username = $4",
                    [newstiche, newpoints, newwongames, username],
                    (error, results) => {
                        if (error) {
                            res.status(400).send();
                        }
                    }
                );
            } else {
                let newpoints = results.rows[0].punkte + 10 + addedstiche;
                let newlostgames = results.rows[0].verlorenespiele + 1;
                pool.query(
                    "UPDATE public.users SET anzstiche = $1, punkte = $2, verlorenespiele = $3 WHERE username = $4",
                    [newstiche, newpoints, newlostgames, username],
                    (error, results) => {
                        if (error) {
                            res.status(400).send();
                        }
                    }
                );
            }
        }
    );
}

//Retrieves the URL of the cards
app.get("/cards", (req, res) => {
    pool.query(
        "SELECT bezeichnung, pfad FROM public.karten where bezeichnung = $1",
        [req.body.name],
        (error, results) => {
            if (error) {
                res.status(500).send();
            }
            res.status(200).json(results.rows);
        }
    );
});

//Searches for a user
app.get("/users/search", (req, res) => {
    pool.query(
        "SELECT username FROM public.users WHERE LOWER(username) LIKE '%" +
            req.query.username +
            "%'",
        (error, results) => {
            if (error) {
                res.status(500).send();
                return;
            }
            res.status(200).json(results.rows);
            return;
        }
    );
});

app.get("/cards/all", (req, res) => {
    pool.query("SELECT * FROM public.karten", (error, results) => {
        if (error) {
            res.status(500).send();
            return;
        }
        res.status(200).json(results.rows);
    });
});

app.listen(42069, () => {
    console.log("Listening on Port 42069");
});
