const Student = require("../models/student")
const repo = require("../repositories/studentRepo");

exports.signup = (req, res)=>{
    const user = req.body;
    const student = new Student(user.name, user.email, user.qualification, user.password, user.phone);
    repo.createStudent(student, ()=>{
        res.end("Student is created");
    });
}

exports.signin = (req, res)=>{

}