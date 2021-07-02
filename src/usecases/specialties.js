const Specialties = require('../models/specialties')

function getAll() {
    return Specialties.find()
}

module.exports = {
    getAll
}