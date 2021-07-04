const Presentations = require('../models/presentations')

function getAll(){
    return Presentations.find();
}

module.exports = {
    getAll   
}