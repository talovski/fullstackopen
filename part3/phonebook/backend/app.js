const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const phonebookRouter = require('./controllers/phonebook')
const middleware = require('./utils/middleware')
const logger = require('./utils/logger')
const mongoose = require('mongoose')

logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
})
  .then(() => {logger.info('connected to MongoDB')})
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.static('build'))
app.use(express.json())
app.use(middleware.requestLogger)
// app.use(middleware.morganTiny)
// app.use(middleware.morganData)

app.use('/api/persons', phonebookRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app