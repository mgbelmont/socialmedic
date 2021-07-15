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
        textEmail = "Le recordamos que ahora forma parte de SocialMedic donde podrá obtener la información más actualizada de la industria médica.Su cuenta será validada en unos momentos y recibirá un aviso por este mismo medio."
        htmlEmail = "<p>Le recordamos que ahora forma parte de SocialMedic donde podrá obtener la información más actualizada de la industria médica.</p> <p>Su cuenta será validada en unos momentos y recibirá un aviso por este mismo medio.</p>"

    }

    if (type === "Suscrito") {
        subjectEmail = "Cuenta Validada";
        textEmail = "Su cuenta ha sido aprobada con éxito. Para iniciar sesión  visite http://socialmedic.com ¡Nos alegra contar con usted!"
        htmlEmail = "<p>Su cuenta ha sido aprobada con éxito.</p><p>Para iniciar sesión  visite <a href='http://localhost:3000'>http://socialmedic.com</a></p><p>¡Nos alegra contar con usted!</p>"
    }

    if (type === "Rechazado") {
        subjectEmail = "Cuenta Rechazada";
        textEmail = "Su cuenta ha sido rechazada debido a que los datos que fueron proporcionados no son válidos"
        htmlEmail = "<p>Su cuenta ha sido rechazada debido a que los datos que fueron proporcionados no son válidos</p>"
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