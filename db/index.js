const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose')
const moment = require('moment')
const dotenv = require('dotenv')
const seed = require('../seed')
const Country = require('./countries')

dotenv.config()
let dbURL = 'mongodb://' + process.env.MONGOUSERNAME + ':' + process.env.MONGOPASSWORD + '@ds135690.mlab.com:35690/country-info-api'
let db = mongoose.connection
mongoose.connect(dbURL)

db.on('error', console.error.bind(console, 'connection error:'))
db.once('open', () => {
  console.log('--' + moment().format('hh:mm:ss') + '--' + ' Database connection estabished')
})

Country.remove({}, (err) => {
  if (err) return handleError(err);
})

seed.forEach(country => {
    Country.create(country)
})

module.exports = db
