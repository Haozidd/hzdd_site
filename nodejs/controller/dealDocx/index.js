const readAndBuildDocx = require('./readAndBuildDocx')
const path = require("path");
const addSpecialSymbol = require('./addSpecialSymbol')
const flattenObj = require('./flattenObj')
const jsonObj = require(path.resolve('database/bsciInfo.json'))



module.exports= function (){
    const rootObj ={}


    flattenObj(jsonObj,rootObj)
    //对循环人员添加符号、
    addSpecialSymbol(rootObj,'、')

    readAndBuildDocx('','',rootObj)





}