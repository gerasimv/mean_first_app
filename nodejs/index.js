const express = require('express')
const bodyParser = require('body-parser')

const { mongoose } = require('./db.js')
const port = 3030;

let app = express()
app.use(bodyParser.json())
app.listen(port, () => console.log('Server started on port: ' + port))