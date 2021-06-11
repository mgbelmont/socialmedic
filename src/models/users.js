
// de afuera hacia adentro
// endpoint -> caso de uso -> model

// antes de los endpoint y los usecases tenemos que crear el model
// ahora estamos en models

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
    nickname: {
        type: String,
        required: true,
        minLenght: 1
    },
    email: {
        type: String, 
        match: /.+@.+\..+/, 
        required: true,
        maxLength: 100
    },
    password:{
        type: String, 
        required : true,
        minLength: 1
    },
    avatar_url: {
        type: String,
        required: true,
        minLenght: 1
    },
    publishes: {
        type: Number,
        required: true
    },
    updatedate :{
        type: Date,
        required: true
    },
    registerdate :{
        type: Date,
        required: true
    },
    validated: {
        type: String,
        enum: [ 'enabled', 'disabled'],
        required: true
    },
    profile: {
        type: String,
        required: true,
        minLenght: 1
    },
    especiality_id: {
        type: String,
        required: true,
        minLenght: 1
    },
    cedula: {
        type: String,
        required: true,
        minLenght: 1
    },
})


const model = mongoose.model('users', usersSchema)

module.exports = model