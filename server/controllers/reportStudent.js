const data = require('../studentsScores');
const fs = require('fs'); 
const path = require('path');

exports.post = (req, res) => {

  const studentID = req.body.studentID;
  const studentScore = req.body.studentScore;

  fs.readFile(path.join(__dirname, '..', 'studentsScores.json'),(err, data) => {
    if (err) throw err; 
    const datajson = JSON.parse(data); 

    console.log(datajson); 

    if(studentID in datajson["Students"])
      datajson["Students"][studentID].push(studentScore)
    else 
      datajson["Students"][studentID] = [studentScore]

    console.log(" ")
    
    fs.writeFile(path.join(__dirname, '..', 'studentsScores.json'), JSON.stringify(datajson), err => { 
      if (err) throw err;  
     
      console.log("Done writing");
      console.log(datajson); 

      res.JSON(datajson);

  }); 
}); 
  
}