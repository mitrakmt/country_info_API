const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const logger = require('morgan')
const helmet = require('helmet')
const PORT = process.env.PORT || 8000

const rootRouter = require('./routers')

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(helmet())

app.use('/api', rootRouter)

app.listen(PORT, () => console.log('Making some magic on port', PORT))