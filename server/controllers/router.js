const express = require('express')
const path = require('path')
const ping = require('./ping') 


const router = express.Router()

router.get('/ping', ping.get)

module.exports = router