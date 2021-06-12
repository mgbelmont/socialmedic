const { response } = require('express')
const express = require('express')

const articles =  require('../usecases/articles')

const router = express.Router()

router.get('/', async (request,response)=>{
    try{
        const allArticles = await articles.getAll()
        response.json({
            success: true,
            message: 'All articles',
            data: {
                articles: allArticles
            }
        })
    }catch(error){
        response.status(400)
        response.json({
            success: false, 
            message: 'Could not get articles',
            error: error.message
        })
    }
})

router.post('/', async (request,response)=>{
    try{
        const {title, image, content, user_id, tags,categories,status} = request.body
        const articleCreated = await articles.create(title, image, content, user_id, tags,categories,status)
        response.json({
            success: true,
            message: 'New Article created',
            data: {
                article: articleCreated
            }
        })
    }catch(error){
        response.status(400)
        response.json({
            success: false, 
            message: 'Error at Article creation',
            error: error.message
        })
    }
})

module.exports = router