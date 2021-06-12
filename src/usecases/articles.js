const Articles = require('../models/articles')

function getAll(){
    return Articles.find()
}

function create(title, image, content, user_id, tags,categories,status){
    const creationdate = Date.now()
    return Articles.create({title, image, content, user_id, tags,categories,status,creationdate })
}

module.exports = {
    getAll,
    create
}