const data = require('../studentsScores');
const fs = require('fs'); 
const path = require('path');

exports.post = (req, res) => {

    const studentID = req.body.studentID;

    fs.readFile(path.join(__dirname, '..', 'studentsScores.json'),(err, data) => {
        if (err) throw err; 

        let requestedStudent

        const datajson = JSON.parse(data); 

        if(studentID in datajson["Students"]){
            requestedStudent = datajson["Students"][studentID]
        } else {
            requestedStudent = -1
        }

        res.json(requestedStudent);
  

}); 
  
}