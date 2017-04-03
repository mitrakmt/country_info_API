var mongoose = require('mongoose')  

var countriesSchema = new mongoose.Schema({
  name: {type: String, required: true},
  code: {type: String, required: true, unique: true},
  description: {type: String, required: true},
  area: {type: Number, required: true},
  population: {type: Number, required: true},
  gdp: {type: Number, required: true},
  capital: {type: String, required: true},
  neighbors: [String]
})

module.exports = mongoose.model('Countries', countriesSchema)