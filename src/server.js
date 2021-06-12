
const express = require('express')
const cors= require('cors')
const productsRouter = require('./routers/products')



const logRequest = require('./middlewares/logger')

const app = express()

app.use(cors())
app.use(express.json())
app.use(logRequest)
app.use('/products',productsRouter)



module.exports= app