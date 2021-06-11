const express = require('express')
const cors= require('cors')
const articlesRouter = require('./routers/articles')

const middlewareLog = require('./middlewares/middleware')

const app = express()

app.use(cors())
app.use(express.json())
app.use(middlewareLog)
app.use('/articles',articlesRouter)


module.exports= app