
const fs = require('fs')
const path = require('path')
const XLSX = require('xlsx')
const moment = require("moment");
exports.temp = ()=>{

    let workbook = XLSX.readFile(path.resolve('data1.xlsx'))

}

exports.dealReimbursement = (company,project,beginDate,duration)=>{
    let workbook = XLSX.readFile(path.resolve('assets/excel/2023年7月深圳金正江大五金塑胶制品有限公司sedex验厂辅导差旅费明细.xlsx'))
    // console.log(workbook)

    let wsName = company;

    let year = moment(beginDate).get('year')
    let month = moment(beginDate).get('month')+1

    let  catalog = {
        date:'日期',
        leaving:'起点',
        destination:'终点',
        amount:'金额',
        type:'类型',
        invoice:'是否有发票',
        remark:'备注'
    }
    /* Create worksheet */
    let wsData = [
        [`${year}年${month}月${company} ${project} 验厂辅导差旅食宿费明细`],
        Object.values(catalog),
    ];
    console.log(wsData)


    let reimbursementInfo = {
        leaving:'起点',
        destination:'终点',
        amount:'金额',
        type:{transit:"公交地铁",board:"餐费",hotel:"住宿费"},
        invoice: {yes:'有',no:'截图'},
        remark:'备注'
    }


    let dataArrayWaitForInsert = [

    ]
    console.log(moment.now(month))





    let ws = XLSX.utils.aoa_to_sheet(wsData);
    let wb = XLSX.utils.book_new();
    //
    //
    XLSX.utils.book_append_sheet(wb, ws, wsName);
    //
    if(!ws["!merges"]) ws["!merges"] = [];
    ws["!merges"].push(XLSX.utils.decode_range("A1:G1"))

    XLSX.writeFile(wb, "SheetJS.xlsx");

    //
    // XLSX.writeFile(workbook,'out.xlsx',{
    //     bookSST:true,
    //
    // })










}