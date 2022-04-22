const Student = require("../models/student")
const repo = require("../repositories/studentRepo");
const jwt = require("jsonwebtoken");

exports.signup = (req, res)=>{
    const user = req.body;
    const student = new Student(user.name, user.email, user.qualification, user.password, user.phone);
    repo.createStudent(student, ()=>{
        res.end("Student is created");
    });
}

exports.signin = (req, res)=>{
    repo.loginStudent(req.body.email, req.body.password, (err, rows)=>{
        if(err){
            return res.end("Invalid email or password");
        }
        const token = jwt.sign(
            {email:req.body.email},
            "PRIVATEKEY",
            {
                expiresIn: "2h"
            }
        );
        return res.status(200).end(token);
    })
}