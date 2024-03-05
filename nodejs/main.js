const koa = require('koa')
const app = new koa()
const router = require("./router");
const path = require("path");
const database = require('./database/index')
const bodyParser = require('koa-bodyparser')
const {koaBody} = require('koa-body')
const axios = require('axios')

const {test1} = require("./database");
database.connectDB({})
app
    .use(async (ctx, next) => {
        ctx.set('Access-Control-Allow-Origin', '*')
        ctx.set('Access-Control-Allow-Headers', "Content-Type")

        await next()
    })
    // .use(koaBody({
    //     multipart:true,
    //     formidable:{
    //         uploadDir:path.join(__dirname,"/public/img"),
    //         keepExtensions:true
    //     }
    // }))
    // .use(bodyParser())
    .use(router.routes()).use(router.allowedMethods())

    .listen(4000)

