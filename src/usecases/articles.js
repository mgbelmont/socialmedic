const Articles = require('../models/articles')

function getAll() {
    return Articles.find().populate({ path: "user_id", model: "users" }).populate({ path: "category_id", model: "categories" }).exec()
}

function create(title, image, content, user_id, tags, category_id, enabled) {
    const creationdate = Date.now()
    const updatedate = Date.now()
    return Articles.create({ title, image, content, user_id, tags, category_id, enabled, creationdate, updatedate })
}

function updateById(id, dataToUpdate) {
    const updateDate = { "updatedate": Date.now() }
    Object.assign(dataToUpdate, updateDate);
    return Articles.findByIdAndUpdate(id, dataToUpdate, { useFindAndModify: false })
}

function deleteById(id) {
    return Articles.findByIdAndDelete(id)
}

function getById(id) {
    return Articles.findById(id).populate({ path: "user_id", model: "users" }).populate({ path: "category_id", model: "categories" }).exec()
}

module.exports = {
    getAll,
    create,
    updateById,
    deleteById,
    getById
}