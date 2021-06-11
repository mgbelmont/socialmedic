const mongoose = require('mongoose')

const articlesSchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    image:{
        type: String,
        minLength: 2,
        required: true
    },
    content:{
        type: String,
        minLength:2,
        required: true
    },
    user_id:{
        type: String,
        required:true
    },
    status:{
        type: String,
        enum: [ 'enabled', 'disabled'],
        required: true
    },
    categories:{
        type: [String],
        required: true
    },
    tags:{
        type: [String],
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

const model = mongoose.model('articles', articlesSchema)

module.exports = model