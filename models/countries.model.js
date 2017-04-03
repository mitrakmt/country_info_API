let countriesModel = {}
let Countries = require('../db/countries')

countriesModel.getCountry = (code) => {
    let getCountry = new Promise((resolve, reject) => {
        Countries.findOne({code: code}, (err, country) => {
            if (err) reject(err);

            resolve(country)
        })
    })

    return getCountry.then(country => {
            return country
        })
}

countriesModel.addCountry = (name, code, description, gdp, area, population, neighbors) => {
    let addCountry = new Promise((resolve, reject) => {
        Countries.create({
            name: name,
            code: code,
            description: description,
            gdp: gdp,
            area: area,
            population: population,
            neighbors: neighbors
        }, (err, country) => {
            if (err) reject(err);

            resolve(country)
        })
    })

    return addCountry.then(country => {
        return country
    })
}

module.exports = countriesModel