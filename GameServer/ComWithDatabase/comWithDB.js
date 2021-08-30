let Pool = require("pg").Pool;
const express = require("express");
const app = express();
const databaseConfig = require("./databaseConf.json");
const pool = new Pool(databaseConfig);

//CORS
app.all("/", function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

//Handle rest post ...../angebot
app.post("/angebot", (request, response) => {
  //select from Database
  pool.query(
    "SELECT * FROM angebot WHERE ang_id = $1",
    [request.body.angebot_id],
    (error, results) => {
      if (error) {
        throw error; //error occured
      }
      //return json obj (result.rows)
      response.status(200).json(results.rows);
    }
  );
});
