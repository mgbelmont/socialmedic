
const express = require('express');
const router = express.Router();
const replies = require('../usecases/replies');
const authMiddlewares = require('../middlewares/auth')
router.use(authMiddlewares.auth)

router.get('/', authMiddlewares.authRoles(['admin', 'medico']), async (request, response) => {
    try {
        const allReplies = await replies.getAll();
        response.json({
            success: true,
            message: 'All replies',
            data: {
                replies: allReplies
            }
        });

    } catch (error) {
        response.status(400);
        response.json({
            success: false,
            message: 'Error at get all replies',
            error: error.message

        });
    }
})

router.post('/', authMiddlewares.authRoles(['admin', 'medico']), async (request, response) => {
    try {
        const replyCreated = await replies.create(request.body);
        response.json({
            success: true,
            message: 'New Reply created :D',
            data: {
                replies: replyCreated
            }
        });

    } catch (error) {
        response.status(400);
        response.json({
            success: false,
            message: 'Error at Reply creation',
            error: error.message

        });
    }
});

router.get('/:type/:id', authMiddlewares.authRoles(['admin', 'medico']), async (request, response) => {
    try {
        const { type, id } = request.params;
        const repliesByDocumentId = await replies.getByDocumentId(type, id);
        response.json({
            success: true,
            message: 'Reply Found',
            data: {
                replies: repliesByDocumentId
            }
        });

    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at found replies',
            error: error.message

        });
    }
});

router.get('/count/:type/:id', authMiddlewares.authRoles(['admin', 'medico']), async (request, response) => {
    try {
        const { type, id } = request.params
        const countReplies = await replies.getCountRepliesByDocument(type, id)
        response.json({
            success: true,
            message: 'All replies',
            data: {
                replies: countReplies
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not get replies by document',
            error: error.message
        })
    }
})

router.delete('/:id', authMiddlewares.authRoles(['admin']), async (request, response) => {
    try {
        const { id } = request.params;
        const replyDeleted = await replies.deleteById(id);
        response.json({
            success: true,
            message: 'Reply Deleted',
            data: {
                replies: replyDeleted
            }
        });

    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at deleted replies',
            error: error.message
        });
    }
});

module.exports = router
