const Users = require('../models/users')

const bcrypt = require('../lib/bcrypt')

const jwt = require('../lib/jwt')

const emailSend = require('../lib/sendEmail')


function getAll() {
    return Users.find()
}

function getById(id) {
    return Users.findById(id).populate({ path: "specialty_id", model: 'specialties', }).exec();
}

function deleteById(id) {
    return Users.findByIdAndDelete(id);
}

async function updateById(id, dataToUpdate) {
    const datauser = await Users.findById(id)

    if (dataToUpdate.status) {
        console.log("estatus: ", dataToUpdate.status)
        await emailSend.sendEmail(datauser.email, dataToUpdate.status)
    }

    return Users.findByIdAndUpdate(id, dataToUpdate);
}

async function create(firstname, lastname, mother_lastname, nickname, email, password, specialty_id, professional_license, professional_license_url, avatar_url) {


    // Inicio de la funcion userFound para saber si el email ya existe
    const userFound = await Users.findOne({ email: email })

    if (userFound) {
        throw new Error('User already exist')
    }
    // Fin de la funcion userFound

    // Para encryptar el password
    const encryptedPassword = await bcrypt.hash(password)

    const updatedate = Date.now()
    const registerdate = Date.now()
    const can_publish = false
    const role = ["medico"]
    const status = "Validando"
    await emailSend.sendEmail(email, status)

    return Users.create({ firstname, lastname, mother_lastname, nickname, email, password: encryptedPassword, can_publish, status, role, specialty_id, professional_license, professional_license_url, updatedate, registerdate, avatar_url })

}


async function login(email, password) {
    const userFound = await Users.findOne({ email })

    if (!userFound) {
        throw new Error('Invalid Email')
    }

    const isValidPassword = await bcrypt.compare(password, userFound.password)

    if (!isValidPassword) {
        throw new Error('Invalid Password')
    }

    return jwt.sign({ id: userFound._id, role: userFound.role })

}

module.exports = {
    getAll,
    getById,
    deleteById,
    updateById,
    create,
    login

}



