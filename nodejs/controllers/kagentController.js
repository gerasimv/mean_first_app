const express = require('express');
var router = express.Router();

var { Kagent } = require('../models/kagent');

router.get("/", (req, res) => {
    Kagent.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Ошибка получения списка всех контрагентов: ' + JSON.stringify(err, undefined, 2)); }
    })
})

module.exports = router