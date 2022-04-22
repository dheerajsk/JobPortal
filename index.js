const express = require("express");
const server = express();
const studentRoutes = require("./src/routers/student");
const companyRoutes = require("./src/routers/company");
const bodyParser = require("body-parser");

server.use(bodyParser.json());

server.use("/api/student", studentRoutes);
server.use("/api/company", companyRoutes);

server.get("/",(req, res)=>{
    res.end("Welcome to Job Portal");
});

server.listen(4000);

console.log("Server is listening on 4000");
