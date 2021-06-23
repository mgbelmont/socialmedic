

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
        const {name, lastname, lastnamem, email, password, especiality_id, cedula} = request.body

        const nickname = `${name}${lastname}`

        const userCreated = await users.create(name, lastname, lastnamem, nickname, email, password, especiality_id, cedula)
        
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

router.post('/login', async (request, response) => {
    try {

        const { email, password} = request.body

        const token = await users.login(email, password)

        response.json({
            success: true,
            message: 'Logged In',
            data: {
                token
            }
        })
        
    } catch (error) {
        response.status(400)

        response.json({
            success: false,
            message : 'Could not Login',
            error: error.message     
        })
    }
})


module.exports = router