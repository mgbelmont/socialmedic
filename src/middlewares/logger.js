
function logRequest(request,response, next){
    const method = request.method
    const ruta = request.url
    const body = JSON.stringify(request.body)
    console.log(`[${method}] [${ruta}] [${body}]`)
    next()
}

module.exports = logRequest