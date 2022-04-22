
const db = require("../config/mysql");

exports.createStudent = (student, cb)=>{

    console.log(student);
    const query = "insert into Student(name, email, phone, qualification, password) values('"+student.name+"','"+student.email+"','"+student.phone+"','"+student.qualification+"','"+student.password+"')";
    console.log(query);
    db.query(query, (err)=>{
        if(!err){
            cb();
        }else{
            throw new Error(err);
        }
    })
}