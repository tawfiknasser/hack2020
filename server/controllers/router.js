const express = require('express')
const path = require('path')
const ping = require('./ping') 


const router = express.Router()

router.get('*', (req, res) => {
    res.sendFile(
      path.join(__dirname, '..', '..', 'frontend', 'dist', 'index.html'),
    );
  });

router.get('/ping', ping.get)

module.exports = router