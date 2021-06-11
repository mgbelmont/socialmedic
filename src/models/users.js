const mongoose = require('mongoose')

const usersSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minLenght: 2,
        maxLength: 20
    },
    lastName: {
        type: String,
        required: true,
        minLenght: 2,
        maxLength: 20
    },
    password:{
        type: String, 
        required : true,
        minLength: 1
    },
    
})


const model = mongoose.model('users', usersSchema)

module.exports = model