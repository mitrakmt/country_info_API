const countriesRouter = require('express').Router()
const countriesController = require('../controllers/countries.controller')
    
countriesRouter.route('/:countryId')
    .get(countriesController.getCountryDescription)

module.exports = countriesRouter