const Categories = require('../models/categories')

function getAll(){
    return Categories.find()
}

module.exports = {
    getAll   
}
