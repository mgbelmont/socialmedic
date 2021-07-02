const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        required: true
    }
    
})

const model = mongoose.model('categories', categorySchema)

module.exports = model