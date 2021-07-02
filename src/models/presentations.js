const mongoose = require('mongoose')

const presentationSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 2,
        required: true
    }
    
})

const model = mongoose.model('presentations', presentationSchema)

module.exports = model