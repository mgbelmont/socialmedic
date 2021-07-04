const { response } = require('express')

const express = require('express')

const webinars = require('../usecases/webinars')
const authMiddlewares = require('../middlewares/auth')

const router = express.Router()
router.use(authMiddlewares.auth)

router.get('/', authMiddlewares.authRoles(['admin', 'medico']), async (request, response) => {
    try {
        const allWebinars = await webinars.getAll()
        response.json({
            success: true,
            message: 'All webinars',
            data: {
                webinars: allWebinars
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not get webinars',
            error: error.message
        })
    }
})

router.get('/:id', authMiddlewares.authRoles(['admin', 'medico']), async (request, response) => {
    try {
        const { id } = request.params
        const webinarById = await webinars.getById(id)
        response.json({
            success: true,
            message: 'Webinar Found',
            data: {
                webinars: webinarById
            }
        })

    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at found webinar',
            error: error.message

        })
    }
})

router.post('/', authMiddlewares.authRoles(['admin']), async (request, response) => {
    try {
        const { title, user_id, image, video_url, description, datewebinar, duration, category_id } = request.body
        const webinarCreated = await webinars.create(title, user_id, image, video_url, description, datewebinar, duration, category_id)
        response.json({
            success: true,
            message: 'New webinar created',
            data: {
                webinar: webinarCreated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at webinar creation',
            error: error.message
        })
    }
})

router.patch('/:id', authMiddlewares.authRoles(['admin']), async (request, response) => {
    try {
        const { id } = request.params
        const webinarUpdated = await webinars.updateById(id, request.body)
        response.json({
            success: true,
            message: 'Webinar updated',
            data: {
                webinar: webinarUpdated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at webinar update',
            error: error.message
        })
    }
})

router.delete('/:id', authMiddlewares.authRoles(['admin']), async (request, response) => {
    try {
        const { id } = request.params
        const webinarDeleted = await webinars.deleteById(id)
        response.json({
            success: true,
            message: 'Webinar deleted',
            data: {
                webinar: webinarDeleted
            }
        })

    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: "Error at webinar delete",
            error: error.message

        })
    }
})


module.exports = router