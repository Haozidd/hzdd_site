const fs = require("fs");
const path = require("path");
const PizZip = require("pizzip");
const Docxtemplater = require("docxtemplater");
module.exports=function (inputDocxPath,outputDocxPath,renderObj){

    let baseDocxPath = 'database/docx/bsci/'


    const content = fs.readFileSync(
        path.resolve(baseDocxPath+"2.1员工代表/员工代表记录.docx"),
        "binary"
    );


    const zip = new PizZip(content);

    const doc = new Docxtemplater(zip,{
        paragraphLoop:true,
        linebreaks:true
    })

    doc.render({
        ...renderObj
    })

    const buf = doc.getZip().generate({
        type: "nodebuffer",
        compression: "DEFLATE",
    });



    fs.writeFileSync(path.resolve(__dirname, "员工代表记录output.docx"), buf);



}