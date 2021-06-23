const Articles = require('../models/articles')

function getAll(){
    return Articles.find()
}

function create(title, image, content, user_id, tags,category_id,status){
    const creationdate = Date.now()
    const updatedate = Date.now()
    return Articles.create({title, image, content, user_id, tags,category_id,status,creationdate,updatedate })
}

function updateById(id, dataToUpdate){
    const updateDate = {"updatedate": Date.now()}
    Object.assign(dataToUpdate, updateDate);
    return Articles.findByIdAndUpdate(id, dataToUpdate,{useFindAndModify: false})
}

function deleteById(id){
    return Articles.findByIdAndDelete(id)
}

function getById(id){
    return Articles.findById(id)
}

module.exports = {
    getAll,
    create,
    updateById,
    deleteById,
    getById
}