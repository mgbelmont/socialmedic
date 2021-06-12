const mongoose = require('mongoose')

const webinarsSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    user_id:{
        type: String,
        required:true
    },
    image:{
        type: String,
        minLength: 5,
        required: true
    },
    description:{
        type: String,
        minLength:5,
        required: true
    },
    duration:{
        type: String,
        required: true
    },
    categories:{
        type: String,
        enum: [ 'Cardiovascular y Metabolico', 'Gastro', 'Sobrepeso y Obesidad','Salud Femenina', 'OTC' ],
        required: true
    },
    creationdate:{
        type: Date,
        required:true
    },
    updatedate:{
        type: Date
    }
    
})

const model = mongoose.model('webinars', webinarsSchema)

module.exports = model