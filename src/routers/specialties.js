const { response } = require('express')
const express = require('express')

const specialties = require('../usecases/specialties')

const router = express.Router()


router.get('/', async (request, response) => {
    try {
        const allSpecialties = await specialties.getAll()
        response.json({
            success: true,
            message: 'All specialties',
            data: {
                specialties: allSpecialties
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not get specialties',
            error: error.message
        })
    }
})

module.exports = router