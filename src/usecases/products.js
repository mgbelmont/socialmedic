const Products = require('../models/products')

function getAll () {
    return Products.find()
}

function getById(id){
    return Products.findById(id)
}

function create({ name, image, sustance, presentation_id, category_id, formulation, terapeutic_indications, general_description, dose }){
    const creationdate = Date.now()
    const updatedate=Date.now()
    
    return Products.create({ name, image, sustance, presentation_id, category_id, formulation, terapeutic_indications, general_description, dose, creationdate, updatedate })
}

function updateById(id,dataToUpdate){
    return Products.findByIdAndUpdate(id,dataToUpdate);
}

module.exports={
    getAll,
    getById,
    create,
    updateById
}