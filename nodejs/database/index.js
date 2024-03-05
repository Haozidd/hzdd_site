const mongoose = require('mongoose')
const schema = require("./schema/index");
const defaultURI = 'mongodb://localhost:27017/'
const defaultDatabase = 'hzddProject'
const _ = require('lodash')

const model={}

exports.connectDB = function ({URI=defaultURI,database=defaultDatabase}) {
    mongoose.connect(`${defaultURI}${database}`)
        .then(res => console.log('Database has connected'))
        .catch(err => console.log(err));
}

exports.disconnectDB = function () {
    mongoose.disconnect()
        .then(res => console.log('Database closed'))
        .catch(err=>console.log(err))
}

exports.constructModel = function (collection,schema){
    if (!model[_.camelCase(collection+'_'+'model')]){
        const returnObject= Object.defineProperty(model,_.camelCase(collection+'_'+'model'),{
            value: mongoose.model(collection,schema),
            writable: false,
            enumerable:true
        })
        return returnObject[_.camelCase(collection+'_'+'model')]
    }
}