const Router = require('koa-router')
const router = new Router()


const sites = require ('./sites')
const searchEngines = require('./searchEngines')
const upload= require('./upload')

router.use('/sites',sites.routes(),sites.allowedMethods())
router.use('/searchEngines',searchEngines.routes(),searchEngines.allowedMethods())
router.use('/upload',upload.routes(),upload.allowedMethods())

module.exports = router