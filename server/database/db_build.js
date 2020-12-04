const fs = require('fs');
const path = require('path');
const connection = require('./connection');

const dbSql = fs
	.readFileSync(path.join(__dirname, 'sql', 'db_build.sql'))
	.toString();

connection
	.query(dbSql)
	.then((data) => console.log('database has been created'))
	.catch((err) => console.log(err));