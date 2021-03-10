let Pool = require('pg').Pool;
const databaseConfig = require('./databaseConf.json')

const pool = new Pool(databaseConfig);

