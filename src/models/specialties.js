const mongoose = require('mongoose')

const specialtiesSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const model = mongoose.model('specialties', specialtiesSchema)

module.exports = model