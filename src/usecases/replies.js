
const Replies = require('../models/replies');

function getAll () {
    return Replies.find();
}

function getCountRepliesByDocument(type, id){
    return Replies.countDocuments({document_type:type, document_id:id});
}

function getByDocumentId(type,id){
    return Replies.find({document_type:type,document_id:id}).sort({creationDate:-1})
    .populate({path: "user_id", model: 'users',  })
    .exec(); 
}

function create({ comment, document_type, document_id, user_id }){
    const creationdate = Date.now();
    return Replies.create({ comment, document_type, document_id, user_id, creationdate });
}


module.exports={
    getAll,
    getCountRepliesByDocument,
    getByDocumentId,
    create
}

