const mongoose = require('mongoose')

const replySchema = new mongoose.Schema({    
    comment: {
        type: String,
        required: true,
        minLength: 2
    },
    document_type: {
        type: String,
        required: true,
        minLength: 2
    },
    document_id: {
        type: String,
        required: true,
        minLength: 2
        
    },
    user_id: {
        type: String,
        required: true,
        minLength:2
    },
    creationdate: {
        type: Date,
        required: true,
        minLength:1
    }
})

const model = mongoose.model('replies', replySchema)

module.exports = model
