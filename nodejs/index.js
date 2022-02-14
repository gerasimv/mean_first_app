const express = require('express');
const bodyParser = require('body-parser');

const { mongoose } = require('./db.js');
const lPort = 3030;

var kagentController = require('./controllers/kagentController.js');

var app = express();
app.use(bodyParser.json());
app.listen(lPort, () => console.log('Server started on port: ' + lPort));
app.use('/kagents', kagentController);
