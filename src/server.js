const express = require('express')
const cors= require('cors')
const articlesRouter = require('./routers/articles')
const usersRouter = require('./routers/users')

const middlewareLog = require('./middlewares/middleware')

const app = express()

app.use(cors())
app.use(express.json())
app.use(middlewareLog)
app.use('/articles',articlesRouter)
app.use('/articles',usersRouter)

module.exports= app