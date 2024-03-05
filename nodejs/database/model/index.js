const mongoose = require('mongoose')


module.exports = function (collection,schema){
    return mongoose.model(collection, schema)
}