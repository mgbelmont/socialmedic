const { response } = require('express')

const express = require('express')

const webinars =  require('../usecases/webinars')

const router = express.Router()

router.get('/', async (request,response)=>{
    try{
        const allWebinars = await webinars.getAll()
        response.json({
            success: true,
            message: 'All webinars',
            data: {
                webinars: allWebinars
            }
        })
    }catch(error){
        response.status(400)
        response.json({
            success: false, 
            message: 'Could not get webinars',
            error: error.message
        })
    }
})

router.post('/', async (request,response)=>{
    try{
        const {title, user_id, image, description, categories, duration} = request.body
        const webinarCreated = await webinars.create(title, user_id, image, description, categories, duration)
        response.json({
            success: true,
            message: 'New webinar created',
            data: {
                webinar: webinarCreated
            }
        })
    }catch(error){
        response.status(400)
        response.json({
            success: false, 
            message: 'Error at webinar creation',
            error: error.message
        })
    }
})

module.exports = router