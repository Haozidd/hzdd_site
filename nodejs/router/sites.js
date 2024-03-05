const Router = require('koa-router')
const router = new Router()
const database = require("../database/index");


let sitesModel = database.constructModel('sites', require('../database/schema/site'))

router.get('/', async (ctx, next) => {
    ctx.body = await sitesModel.find()
})

module.exports = router