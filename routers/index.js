const rootRouter = require('express').Router()
const countriesRouter = require('./countries.router')

rootRouter.use('/countries', countriesRouter)

module.exports = rootRouter