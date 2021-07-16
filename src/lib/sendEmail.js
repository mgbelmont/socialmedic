const { EM_USER, EM_PASSWORD } = process.env

const nodemailer = require('nodemailer')

async function sendEmail(email, type) {
    console.log(email, type)



    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: `${EM_USER}`,
            pass: `${EM_PASSWORD}`,
        },
        tls: {
            rejectUnauthorized: true
        }
    });

    let subjectEmail = "";
    let textEmail = ""
    let htmlEmail = ""
    if (type === "Validando") {
        subjectEmail = "Registro Exitoso";
        textEmail = "¡Gracias por registrarse en SocialMedic!. Sus datos estan siendo validados. En breve recibirá un aviso por este medio, con el estatus de la aprobación de su cuenta. ¡Nos complace contar con su participación!"
        htmlEmail = "<div><div style='background-color: #3C58C1; height: 120px; display: flex; flex-direction: column; align-items: center; '><img src='https://socialmedic-bucket.s3.us-east-2.amazonaws.com/logo.png' alt='' style='display: block; margin: auto; width: 300px;'></div><div style='margin: 5.2rem 3rem;'><h1 style='text-align: center; color: #53D2D3; font-family:Arial, Helvetica, sans-serif; font-size: 34px; margin-bottom: 4rem;'>¡Gracias por registrarse en SocialMedic!</h1><p style='text-align: center; color: #6C6A6A; font-family:Arial, Helvetica, sans-serif; font-size: 18px;'>Sus datos estan siendo validados.</p><p style='text-align: center; color: #6C6A6A; font-family:Arial, Helvetica, sans-serif; font-size: 18px; margin-bottom: 4rem;'>En breve recibirá un aviso por este medio, con el estatus de la aprobación de su cuenta.</p><p style='text-align: center; color: #6C6A6A; font-family:Arial, Helvetica, sans-serif; font-size: 22px;'><b>¡Nos complace contar con su participación!</b></p></div><div style='background-color: #CBE8F6; height: 80px;'></div></div>"
    }

    if (type === "Suscrito") {
        subjectEmail = "Cuenta Validada";
        textEmail = "¡Bienvenid@ a SocialMedic! Su cuenta ha sido aprobada. Para iniciar sesión  visite http://socialmedic.com ¡Nos complace contar con su participación!"
        htmlEmail = "<div><div style='background-color: #3C58C1; height: 120px; display: flex; flex-direction: column; align-items: center; '><img src='https://socialmedic-bucket.s3.us-east-2.amazonaws.com/logo.png' alt='' style='display: block; margin: auto; width: 300px;'></div><div style='margin: 5.2rem 3rem;'><h1 style='text-align: center; color: #53D2D3; font-family:Arial, Helvetica, sans-serif; font-size: 34px; margin-bottom: 4rem;'>¡Bienvenid@ a SocialMedic!</h1><p style='text-align: center; color: #6C6A6A; font-family:Arial, Helvetica, sans-serif; font-size: 18px;'>Su cuenta ha sido <span style='color: #3C58C1;'>aprobada</span>.</p><p style='text-align: center; color: #6C6A6A; font-family:Arial, Helvetica, sans-serif; font-size: 18px; margin-bottom: 4rem;'>Para iniciar sesión  visite <a href='http://localhost:3000'>http://socialmedic.com</a></p><p style='text-align: center; color: #6C6A6A; font-family:Arial, Helvetica, sans-serif; font-size: 22px;'><b>¡Nos complace contar con su participación!</b></p></div><div style='background-color: #CBE8F6; height: 80px;'></div></div>"
    }

    if (type === "Rechazado") {
        subjectEmail = "Cuenta Rechazada";
        textEmail = "¡Gracias por su registro! Su cuenta ha sido rechazada debido a que los datos que fueron proporcionados no son válidos. ¡Nos complace contar con su participación! "
        htmlEmail = "<div><div style='background-color: #3C58C1; height: 120px; display: flex; flex-direction: column; align-items: center; '><img src='https://socialmedic-bucket.s3.us-east-2.amazonaws.com/logo.png' alt='' style='display: block; margin: auto; width: 300px;'></div><div style='margin: 5.2rem 3rem;'><h1 style='text-align: center; color: #53D2D3; font-family:Arial, Helvetica, sans-serif; font-size: 34px; margin-bottom: 4rem;'>¡Gracias por su registro!</h1><p style='text-align: center; color: #6C6A6A; font-family:Arial, Helvetica, sans-serif; font-size: 18px;'>Su cuenta ha sido <span style='color: red;'>rechazada</span> debido a que los datos que fueron proporcionados no son válidos.</p><p style='text-align: center; color: #6C6A6A; font-family:Arial, Helvetica, sans-serif; font-size: 22px;'><b>¡Nos complace contar con su participación!</b></p></div><div style='background-color: #CBE8F6; height: 80px;'></div></div>"
    }



    let info = await transporter.sendMail({
        from: '"Social Medic" <noreply@socialmedic.com>',
        to: `${email}, socialmedic11g@gmail.com`,
        subject: `${subjectEmail}`,
        text: `${textEmail}`,
        html: `${htmlEmail}`,
    });

    console.log("Message sent: %s", info.messageId);

    console.log(`Email[${email}]`);

}

module.exports = {
    sendEmail
}