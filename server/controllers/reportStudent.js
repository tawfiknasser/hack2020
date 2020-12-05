const data = require('../studentsScores');
const fs = require('fs'); 
const path = require('path');

exports.post = (req, res) => {

  const studentID = req.body.studentID;
  const score = req.body.score;
console.log(studentID,"studentID");
console.log(score,"score");

  fs.readFile(path.join(__dirname, '..', 'studentsScores.json'),(err, data) => {
    if (err) throw err; 
    const datajson = JSON.parse(data); 

    console.log(datajson,"sss"); 

    if(studentID in datajson["Students"])
      datajson["Students"][studentID].push(score)
    else 
      datajson["Students"][studentID] = [score]

    console.log(" ")
    
    fs.writeFile(path.join(__dirname, '..', 'studentsScores.json'), JSON.stringify(datajson), err => { 
      if (err) throw err;  
     
      console.log("Done writing");
      console.log(datajson); 

      res.json(datajson);

  }); 
}); 
  
}