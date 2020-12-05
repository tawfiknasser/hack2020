const express = require('express')
const path = require('path')
const ping = require('./ping') 
const studentScore = require('./reportStudent')
const getGraph = require('./getScoresGraph')
const getScore = require('./getStudentScore')

const router = express.Router()


router.get('/api/ping', ping.get)

router.post('/api/reportScore',studentScore.post)

router.post('/api/getScore', getScore.post)

router.get('/api/getGraph', getGraph.get)

router.get('*', (req, res) => {
  res.sendFile(
    path.join(__dirname, '..', '..', 'frontend', 'dist', 'index.html'),
  );
});

module.exports = router