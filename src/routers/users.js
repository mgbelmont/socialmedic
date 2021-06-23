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

router.delete('/:id', async (request, response)=>{
    try{
        const { id } = request.params
        const  userDeleted = await users.deleteById(id)
        response.json({ 
            success: true,
            message: 'User Deleted',
            data: {
                users: userDeleted
            }
        })
    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Could not delete user',
            error:  error.message
            
        })
    }
})

router.get('/:id', async (request, response)=>{
    try{
        const { id } = request.params
        const  userById = await users.getById(id)
        response.json({ 
            success: true,
            message: 'User Found',
            data: {
                users: userById
            }
        })
    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Could not found user',
            error:  error.message
            
        })
    }
})


router.patch('/:id', async (request, response)=>{
    try{
        const { id } = request.params
        const  userById = await users.updateById(id, request.body)
        response.json({ 
            success: true,
            message: 'User Updated',
            data: {
                users: userById
            }
        })
    }catch(error){
        response.status(400)
        response.json({ 
            success: false,
            message: 'Could not Updated user',
            error:  error.message
            
        })
    }
})

module.exports = router