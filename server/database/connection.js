const { Pool } = require('pg');
require('dotenv').config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) throw new Error('failed to connect with the database');

module.exports = new Pool({
	connectionString,
	ssl: !connectionString.includes('locahost'),
});