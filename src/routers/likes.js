const { response } = require('express')
const express = require('express')

const likes =  require('../usecases/likes')

const router = express.Router()

router.get('/', async (request,response)=>{
    try{
        const allLikes = await likes.getAll()
        response.json({
            success: true,
            message: 'All likes',
            data: {
                likes: allLikes
            }
        })
    }catch(error){
        response.status(400)
        response.json({
            success: false, 
            message: 'Could not get likes',
            error: error.message
        })
    }
})


router.get('/:document/:id', async (request,response)=>{
    try{
        const {document, id} = request.params
        const allLikes = await likes.getAllByIdAndDocument(document, id)
        response.json({
            success: true,
            message: 'All likes',
            data: {
                likes: allLikes
            }
        })
    }catch(error){
        response.status(400)
        response.json({
            success: false, 
            message: 'Could not get likes by document',
            error: error.message
        })
    }
})

router.post('/',  async (request,response)=>{
    try{
        const {document_type, document_id, user_id} = request.body
        const createLike = await likes.create(document_type, document_id, user_id)
        response.json({
            success: true,
            message: 'All likes',
            data: {
                likes: createLike
            }
        })
    }catch(error){
        response.status(400)
        response.json({
            success: false, 
            message: 'Could not post like',
            error: error.message
        })
    } 
})

router.delete('/:id', async(request, response) =>{
    try{
        //id document y id user
        const {document_type, user_id} = request.body
        const {id} = request.params
        const deleteLike = await likes.deleteById(id)
        response.json({
            success: true,
            message: 'Deleted Like',
            data: {
                like: deleteLike
            }
        })
    }catch(error){
        response.status(400)
        response.json({
            success: false, 
            message: 'Could not delete like',
            error: error.message
        })
    }
})
module.exports = router