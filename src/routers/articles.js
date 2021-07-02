const { response } = require('express')
const express = require('express')

const articles = require('../usecases/articles')

const router = express.Router()

router.get('/', async (request, response) => {
    try {
        const allArticles = await articles.getAll()
        response.json({
            success: true,
            message: 'All articles',
            data: {
                articles: allArticles
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not get articles',
            error: error.message
        })
    }
})

router.get('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const article = await articles.getById(id)
        response.json({
            success: true,
            message: 'Article Found',
            data: {
                article: article
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Could not get article',
            error: error.message
        })
    }
})

router.post('/', async (request, response) => {
    try {
        const { title, image, content, user_id, tags, category_id, enabled } = request.body
        const articleCreated = await articles.create(title, image, content, user_id, tags, category_id, enabled)
        response.json({
            success: true,
            message: 'New Article created',
            data: {
                article: articleCreated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at Article creation',
            error: error.message
        })
    }
})

router.patch('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const articleUpdated = await articles.updateById(id, request.body)
        response.json({
            success: true,
            message: 'Article updated',
            data: {
                article: articleUpdated
            }
        })
    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: 'Error at Article update',
            error: error.message
        })
    }
})

router.delete('/:id', async (request, response) => {
    try {
        const { id } = request.params
        const articleDeleted = await articles.deleteById(id)
        response.json({
            success: true,
            message: 'Article deleted',
            data: {
                article: articleDeleted
            }
        })

    } catch (error) {
        response.status(400)
        response.json({
            success: false,
            message: "Error at Article delete",
            error: error.message

        })
    }
})

module.exports = router