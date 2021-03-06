const express = require('express');
const path = require('path');
const compression = require('compression');
const controllers = require('./controllers/router');

const app = express();

app.disable('x-powered-by');
app.use(compression());
app.use(express.json())
app.use(express.static(path.join(__dirname, '..', 'frontend', 'dist')));
app.use(express.static(path.join(__dirname, '..', '..', 'public'), { maxAge: '30d' }));

app.use(controllers);


app.set('port', process.env.PORT || 4000);


module.exports = app;