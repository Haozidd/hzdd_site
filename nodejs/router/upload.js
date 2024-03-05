const Router = require('koa-router')


const router = new Router()
const database = require("../database/index");
const {koaBody} = require("koa-body");
const path = require("path");
const fs = require("fs");


let rootPath = path.join(__dirname, "..")


function redirectFileLocation(name, file) {
    let fileName = file['originalFilename']
    let dirName = 'defaultDir'
    let dirPath
    try {
        let splitArray = file['originalFilename'].split('.')
        dirName = splitArray[splitArray.length - 1]
        console.log(dirName)
    } catch (err) {
    }
    dirPath = `${rootPath}/public/${dirName}`
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath)
    }
    file.filepath = `${dirPath}/${fileName}`

}

router
    .post('/',
        koaBody({
            multipart: true,
            formidable: {
                keepExtensions: true,
                onFileBegin: (name, file) => {
                    redirectFileLocation(name, file)
                }
            }
        }),
        async (ctx, next) => {
            console.dir(ctx.request)

            ctx.body = ctx.request.url
        })
    .post('/largeFiles', koaBody(), async (ctx, next) => {

    })


module.exports = router