
// de afuera hacia adentro
// endpoint -> caso de uso -> modelo

// ya tenemos el modelo en la carpeta Models
// y ahora estamos en caso de uso

const Users = require('../models/users')

const bcrypt = require('../lib/bcrypt')

const jwt = require('../lib/jwt')


function getAll(){
    return Users.find()
}

function getById( id ) {
    return Users.findById( id )
}

function deleteById(id){
    return Users.findByIdAndDelete(id);
}

async function create(name, lastname, lastnamem, nickname, email, password, especiality_id, cedula){


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
    const published = "disabled"
    const profile = "medico"
    const validated = "Validando"


    return Users.create({name, lastname, lastnamem, nickname, email, password: encryptedPassword, published, validated, profile, especiality_id, cedula, updatedate, registerdate})
    
}


async function login (email, password){
    const userFound = await Users.findOne( {email} )

    if(!userFound){
        throw new Error('Invalid Email')
    }

    const isValidPassword = await bcrypt.compare(password, userFound.password)
    
    if(!isValidPassword){
        throw new Error ('Invalid Password')
    }

    return jwt.sign( {id: userFound._id} )

}


module.exports = {
    getAll,
    getById,
    deleteById,
    create,
    login
}



