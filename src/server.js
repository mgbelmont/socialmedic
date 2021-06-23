const express = require('express')
const cors= require('cors')
const articlesRouter = require('./routers/articles')
const usersRouter = require('./routers/users')
const productsRouter = require('./routers/products')
const repliesRouter = require('./routers/replies')

const middlewareLog = require('./middlewares/middleware')

const app = express()

app.use(cors())
app.use(express.json())
app.use(middlewareLog)
app.use('/articles',articlesRouter)
app.use('/users',usersRouter)
app.use('/products',productsRouter)
app.use('/replies',repliesRouter)



module.exports= app