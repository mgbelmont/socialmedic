const moongose = require('mongoose')

const articlesSchema = new moongose.Schema({
    title: {
        type: String,
        minLength: 2,
        maxLength: 100,
        required: true
    },
    content:{
        type: String,
        minLength:2,
        required: true
    },
    image:{
        type: String,
        minLength: 2,
        required: true
    }
})

const model = mongoose.model('articles', articlesSchema)