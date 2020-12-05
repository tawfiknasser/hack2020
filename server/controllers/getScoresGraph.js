const data = require('../studentsScores');
const fs = require('fs'); 
const path = require('path');

exports.get = (req, res) => {

  fs.readFile(path.join(__dirname, '..', 'studentsScores.json'),(err, data) => {
    if (err) throw err; 
    const datajson = JSON.parse(data); 

    let graphValues = []
    let count = []
    for (let key in datajson["Students"]) {
        if (datajson["Students"].hasOwnProperty(key)) {
            for(let i = 0; i < datajson["Students"][key].length; i++){
                if(graphValues.length > i){
                    graphValues[i] = ((graphValues[i] * count[i]) + datajson["Students"][key][i]) / (count[i] + 1)
                    count[i]++
                } else {
                    count.push(0);
                    graphValues.push(datajson["Students"][key][i])
                    count[i]++
                }
            }
        }
} 

    res.json({graphValues});
  

}); 
  
}