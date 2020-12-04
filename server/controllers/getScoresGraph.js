const data = require('../studentsScores');
const fs = require('fs'); 
const path = require('path');

exports.get = (req, res) => {

  fs.readFile(path.join(__dirname, '..', 'studentsScores.json'),(err, data) => {
    if (err) throw err; 
    const datajson = JSON.parse(data); 

    let graphValues = []
    let count = 0;
    for (let key in datajson["Students"]) {
        if (datajson["Students"].hasOwnProperty(key)) {
            for(let i = 0; i < datajson["Students"][key].length; i++){
                if(graphValues.length > i){
                    graphValues[i] = ((graphValues[i] * count) + datajson["Students"][key][i]) / (count + 1)
                    count++
                } else {
                    graphValues.push(datajson["Students"][key][i])
                    count++
                }
            }
        }
} 

res.JSON(graphValues);
  

}); 
  
}