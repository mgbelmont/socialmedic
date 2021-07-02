const Webinars = require('../models/webinars')

function getAll() {
    return Webinars.find().sort({creationDate:-1})
    .populate({path: "user_id", model: 'users',  })
    .exec();  
}

function getById(id) {
    return Webinars.findById(id)
    .populate({path: "user_id", model: 'users',  })
    .exec(); 
}

function create(title, user_id, image, video_url, description, datewebinar, duration, category_id) {
    const creationdate = Date.now()
    const updatedate = Date.now()
    return Webinars.create({ title, user_id, image, video_url, description, datewebinar, duration, category_id, creationdate, updatedate })
}

function updateById(id, dataToUpdate) {
    const updateDate = { "updatedate": Date.now() }
    Object.assign(dataToUpdate, updateDate);
    return Webinars.findByIdAndUpdate(id, dataToUpdate, { useFindAndModify: false })
}

function deleteById(id) {
    return Webinars.findByIdAndDelete(id)
}

module.exports = {
    getAll,
    getById,
    create,
    updateById,
    deleteById
}