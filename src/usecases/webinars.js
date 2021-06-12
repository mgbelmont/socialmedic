const Webinars = require('../models/webinars')

function getAll(){
    return Webinars.find()
}

function create(title, user_id, image, description, categories, duration, updatedate){
    const creationdate = Date.now()
    return Webinars.create({title, user_id, image, description, categories, duration, creationdate, updatedate })
}

module.exports = {
    getAll,
    create
}