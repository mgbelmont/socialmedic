
// de afuera hacia adentro
// endpoint -> caso de uso -> modelo

// ya tenemos el modelo en la carpeta Models
// y ahora estamos en caso de uso

const Users = require('../models/users')

function getAll(){
    return Users.find()
}

function create(name, lastName, nickname, email, password, avatar_url, publishes, validated, profile, especiality_id, cedula){


    // Inicio de la funcion userFound para saber si el email ya existe
    const userFound = await Users.findOne( {email: email} )

    if (userFound) {
        throw new Error('User already exist')
    } 
    // Fin de la funcion userFound

    // Para encryptar el password
    const encryptedPassword = await bcrypt.hash(password)

    const updatedate = Date.now()
    const registerdate = Date.now()

    return Users.create({name, lastName, nickname, email, password: encryptedPassword, avatar_url, publishes, validated, profile, especiality_id, cedula, updatedate, registerdate})
    
}

module.exports = {
    getAll,
    create
}



