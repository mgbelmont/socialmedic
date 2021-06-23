const mongoose = require('mongoose')

const likesSchema = new mongoose.Schema({
    document_type: {
        type: String,
        minLength: 2,
        required: true
    },
    document_id:{
        type: String,
        minLength: 2,
        required: true
    },
    user_id:{
        type: String,
        minLength:2,
        required: true
    },
    creationdate:{
        type: Date,
        required:true
    }
    
})

const model = mongoose.model('likes', likesSchema)

module.exports = model