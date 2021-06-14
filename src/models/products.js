const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({    
    name: {
        type: String,
        required: true,
        minLength: 2
    },
    image: {
        type: String,
        required: true,
        minLength: 2
    },
    sustance: {
        type: String,
        required: true,
        minLength: 2
        
    },
    presentation_id: {
        type: String,
        required: true,
        minLength:2
    },
    category_id: {
        type: String,
        required: true,
        minLength:2
    },
    formulation: {
        type: String,
        required: true,
        minLength:2
    },
    terapeutic_indications: {
        type: String,
        required: true,
        minLength:2
    },
    general_description: {
        type: String,
        required: true,
        minLength:2
    },
    dose: {
        type: String,
        required: true,
        minLength:2
    },
    creationdate: {
        type: Date,
        required: true,
        minLength:1
    },
    updatedate: {
        type: Date,
        required: true,
        minLength:1
    }
})

const model = mongoose.model('products', productSchema)

module.exports = model