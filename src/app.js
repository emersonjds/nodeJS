const express = require('express')
    , car = require('./http/controllers/car')

const app = express()

app.use(car)

const HTTP_PORT = process.env.HTTP_PORT || 8888;

mongoose.connect('mongodb://localhost:27017/cars')

mongoose.connection.on('open', () => {
  app.listen(HTTP_PORT, () => {
    console.log(`Listing on port ${HTTP_PORT}`)
  })
})
