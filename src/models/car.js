const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CarSchema = Schema({
    model: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Car', CarSchema)
