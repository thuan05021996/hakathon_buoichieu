const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
    host: "localhost",
    user :"root",
    database : "hakathon_2",
    password:  "",
    port : 3306,
});

const database = pool.promise();
module.exports = database;