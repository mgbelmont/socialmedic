const { response } = require('express')
const express = require('express')

const presentations = require('../usecases/presentations')
const authMiddlewares = require('../middlewares/auth')

const router = express.Router()
router.use(authMiddlewares.auth)

router.get('/', authMiddlewares.authRoles(['admin', 'medico']), async (request, response) => {
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