const mongoose = require('mongoose')

const usersSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        minLenght: 2,
        maxLength: 20
    },
    lastname: {
        type: String,
        required: true,
        minLenght: 2,
        maxLength: 20
    },
    mother_lastname: {
        type: String,
        required: true,
        minLenght: 2,
        maxLength: 20
    },
    nickname: {
        type: String,
        minLenght: 1
    },
    email: {
        type: String,
        match: /.+@.+\..+/,
        required: true,
        maxLength: 100
    },
    password: {
        type: String,
        required: true,
        minLength: 1
    },
    avatar_url: {
        type: String,
        minLenght: 1
    },
    can_publish: {
        type: Boolean,
        required: true,
        default: false
    },
    updatedate: {
        type: Date,
        required: true
    },
    registerdate: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        enum: ['Suscrito', 'Validando', 'Rechazado'],
        required: true
    },
    role: {
        type: [String],
        enum: ['admin', 'medico'],
        minLength: 1,
        required: true
    },
    specialty_id: {
        type: String,
        required: true,
        minLenght: 1
    },
    professional_license: {
        type: String,
        required: true,
        minLenght: 1
    },
    professional_license_url: {
        type: String,
        required: true,
        minLenght: 1
    },
})


const model = mongoose.model('users', usersSchema)

module.exports = model