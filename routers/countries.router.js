const countriesRouter = require('express').Router()
const countriesController = require('../controllers/countries.controller')

countriesRouter.route('/')
    .post(countriesController.addCountry)
    
countriesRouter.route('/:countryCode')
    .get(countriesController.getCountry)

module.exports = countriesRouter