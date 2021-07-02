const { response } = require('express')
const express = require('express')

const presentations = require('../usecases/presentations')

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const allPresentations = await presentations.getAll()
        response.json({
            success: true,
            message: 'All presentations',
            data: {
                presentations: allPresentations
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not get Presentations',
            error: error.message
        })
    }
})

module.exports = router