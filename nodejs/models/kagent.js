const mongoose = require('mongoose');

var Kagent = mongoose.model('Kagent', {
    id: { type: String },
    name: { type: String },
    inn: { type: Number },
    sVolume: { type: Number }
});

module.exports = Kagent;
