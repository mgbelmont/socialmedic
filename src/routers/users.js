

// de afuera hacia adentro
// endpoint -> caso de uso -> modelo

// ya tenemos el modelo en la carpeta models y el caso de uso en la carpeta usecases
// y ahora estamos en el endpoint

const { response } = require('express')
const express = require('express')

const users =  require('../usecases/users')

const router = express.Router()

router.get('/', async (request,response)=>{
    try{
        const allusers = await users.getAll()
        response.json({
            success: true,
            message: 'All users',
            data: {
                users: allusers
            }
        })
    }catch(error){
        response.status(400)
        response.json({
            success: false, 
            message: 'Could not get users',
            error: error.message
        })
    }
})

router.post('/', async (request,response)=>{
    try{
        const {name, lastName, nickname, email, password, avatar_url, publishes, validated, profile, especiality_id, cedula} = request.body
        
        const userCreated = await users.create(name, lastName, nickname, email, password, avatar_url, publishes, validated, profile, especiality_id, cedula)
        
        response.json({
            success: true,
            message: 'New user created',
            data: {
                article: userCreated
            }
        })
    }catch(error){
        response.status(400)
        response.json({
            success: false, 
            message: 'Error at User creation',
            error: error.message
        })
    }
})

module.exports = router