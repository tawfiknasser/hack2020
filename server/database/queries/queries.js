const query = require('./sqlquery.js')

const readAlerts = (cb) => query.select('SELECT * from alerts', cb)


module.exports = {
    readAlerts

}