const { response } = require('express')
const express = require('express')

const categories = require('../usecases/categories')

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const allCategories = await categories.getAll()
        response.json({
            success: true,
            message: 'All categories',
            data: {
                categories: allCategories
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not get Categories',
            error: error.message
        })
    }
})


module.exports = router