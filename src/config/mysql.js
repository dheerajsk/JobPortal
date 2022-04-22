
const mysql = require("mysql");

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "Password1",
        database:"JobPortal",
        multipleStatements: true
    }
);

module.exports = connection;