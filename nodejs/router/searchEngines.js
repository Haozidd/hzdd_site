const Router = require('koa-router')
const router = new Router()
const database = require("../database/index");
const moment = require("moment/moment");


let collections = 'search_engines'
let schema = require('../database/schema/searchEngine')

let searchEngineModel = database.constructModel(collections,schema)

router
    .get('/', async (ctx, next) => {
        ctx.body = await searchEngineModel.find()
    })
    .post('/create', async (ctx, next) => {
        await searchEngineModel.create({
            name: 'soft',
            url: 'https://www.macat.vip',
            params: '?cat=&s=',
        }).then(() => {})
    })

module.exports = router