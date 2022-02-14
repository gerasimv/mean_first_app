const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/mdb_frstprj', (err) => {
    if (!err)
        console.log('MongoDB connection success!');
    else
        console.log('MongoDB connection error: ' + JSON.stringify(err, undefined, 2));
})

module.exports = mongoose;