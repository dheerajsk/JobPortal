
const db = require("../config/mysql");

exports.createStudent = (student, cb)=>{
    const query = "insert into Student(name, email, phone, qualification, password) values('"+student.name+"','"+student.email+"','"+student.phone+"','"+student.qualification+"','"+student.password+"')";
    db.query(query, (err)=>{
        if(!err){
            cb();
        }else{
            throw new Error(err);
        }
    })
}

exports.loginStudent = (email, password, cb)=>{
    const query = "select email from student where email='"+email+"' and password = '"+password+"'";
    console.log(query);
    db.query(query, (err, rows)=>{
        if(err){
            cb(err, null)
        }else{
            console.log(rows);
            cb(null, rows);
        }
    })
}