const express = require('express')
const cors = require('cors')
const articlesRouter = require('./routers/articles')
const usersRouter = require('./routers/users')
const likesRouter = require('./routers/likes')
const productsRouter = require('./routers/products')
const webinarsRouter = require('./routers/webinars')
const repliesRouter = require('./routers/replies')
const specialtiesRouter = require('./routers/specialties')
const categoriesRouter = require('./routers/categories')
const presentationsRouter = require('./routers/presentations')

const middlewareLog = require('./middlewares/middleware')

const app = express()

app.use(cors())
app.use(express.json())
app.use(middlewareLog)
app.use('/articles', articlesRouter)
app.use('/users', usersRouter)
app.use('/products', productsRouter)
app.use('/webinars', webinarsRouter)
app.use('/likes', likesRouter)
app.use('/replies', repliesRouter)
app.use('/specialties', specialtiesRouter)
app.use('/categories', categoriesRouter)
app.use('/presentations', presentationsRouter)


module.exports = app