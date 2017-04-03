const countriesController = {}
const countriesModel = require('../models/countries.model')

countriesController.getCountry = (req, res) => {
    let code = req.params.countryCode

    countriesModel.getCountry(code)
        .then(country => {
            res.status(200).send(country)
        })
}

countriesController.addCountry = (req, res) => {
    let name = req.body.name
    let code = req.body.code
    let description = req.body.description
    let gdp = req.body.gdp
    let area = req.body.area
    let population = req.body.population
    let neighbors = req.body.neighbors
    let capital = req.body.capital

    countriesModel.addCountry(name, code, description, gdp, area, population, neighbors, capital)
        .then(country => {
            res.status(200).send(country)
        })
}

module.exports = countriesController