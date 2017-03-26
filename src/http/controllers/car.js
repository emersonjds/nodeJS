const express = require('express')
const router = express.Router
const Car = require('../../models/car')

router.get('/v1/car', (req, res) => {
    res.send({'method': 'get'})
})

router.post('/v1/car', (req, res) => {
    const car = new Car()
    car.model = req.body.model

    car.save(() => {
        res.send(car)
    })
})

module.exports = router
