const express = require('express');
const router = require('./routes/routes');
const morgan = require('morgan');
const bodyParser = require('body-parser')

const app = express();

app.use(router);
app.use(bodyParser.json())
app.use(morgan('dev'));

module.exports = app;