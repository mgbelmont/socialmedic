const Likes = require('../models/likes')

function getAll(){
    
    return Likes.find()
}

function getByUserAndDocument(user_id, document_id){
    return Likes.find({user_id: user_id, document_id:document_id})
}

function getAllByIdAndDocument(document_type, document_id){
    return Likes.countDocuments({document_type:document_type, document_id:document_id})
}

async function create(document_type, document_id, user_id){
    const creationdate = Date.now()
    const like = await Likes.find({document_type:document_type, document_id:document_id, user_id: user_id})
    
    if(like !=""){
        throw new Error('Like already exist')
    }
    return Likes.create({document_type, document_id, user_id, creationdate })
}

 function deleteById(id){
    return Likes.findByIdAndDelete(id)
}


module.exports = {
    getAll,
    create,
    deleteById,
    getAllByIdAndDocument,
    getByUserAndDocument
}