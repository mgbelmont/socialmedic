const { response } = require('express')
const express = require('express')

const likes = require('../usecases/likes')
const authMiddlewares = require('../middlewares/auth')


const router = express.Router()
router.use(authMiddlewares.auth)

router.get('/', authMiddlewares.authRoles(['admin', 'medico']), async (request, response) => {
    try {
        const allLikes = await likes.getAll()
        response.json({
            success: true,
            message: 'All likes',
            data: {
                likes: allLikes
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not get likes',
            error: error.message
        })
    }
})
router.post('/user', authMiddlewares.authRoles(['admin', 'medico']), async (request, response) => {
    try {
        const { user_id, document_id } = request.body
        const like = await likes.getByUserAndDocument(user_id, document_id)
        response.json({
            success: true,
            message: 'Like by user and document',
            data: {
                like: like
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not get like',
            error: error.message
        })
    }
})


router.get('/:document/:id', authMiddlewares.authRoles(['admin', 'medico']), async (request, response) => {
    try {
        const { document, id } = request.params
        const allLikes = await likes.getAllByIdAndDocument(document, id)
        response.json({
            success: true,
            message: 'All likes',
            data: {
                likes: allLikes
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not get likes by document',
            error: error.message
        })
    }
})

router.post('/', authMiddlewares.authRoles(['admin', 'medico']), async (request, response) => {
    try {
        const { document_type, document_id, user_id } = request.body
        const createLike = await likes.create(document_type, document_id, user_id)
        response.json({
            success: true,
            message: 'All likes',
            data: {
                likes: createLike
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not post like',
            error: error.message
        })
    }
})

router.delete('/:id', authMiddlewares.authRoles(['admin', 'medico']), async (request, response) => {
    try {

        const { id } = request.params
        const deleteLike = await likes.deleteById(id)
        response.json({
            success: true,
            message: 'Deleted Like',
            data: {
                like: deleteLike
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not delete like',
            error: error.message
        })
    }
})
module.exports = router