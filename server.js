const nodemailer = require('nodemailer');

// Generate test SMTP service account from ethereal.email
// Only needed if you don't have a real mail account for testing
let transporter = nodemailer.createTransport({
    service: "gmail",  
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'oscar.vidasoft@gmail.com', // generated user
        pass: 'Invernalia@!' // generated password
    }
});
module.exports = {
    sendEmail: (codigoSolicitud,onError,onSuccess) => {
    
            
                let mailOptions = {
                    from: '"Oscar Gutierrez" <oscar.vidasoft@gmail.com>', // sender address
                    to: 'carlosnoelg3@gmail.com,alxgutierrez08@gmail.com', // list of receivers
                    subject: 'Cotizacion Titanide Web', // Subject line
                    html: `<b>La cotizacion de codigo: ${codigoSolicitud.id} esta lista para ser atendida</b>` // html body
                };
            
                // send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                        onError(error)
                    }
                    console.log('Message sent: %s', info.messageId);
                        onSuccess()
                });

                // send mail with defined transport object
                transporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        return console.log(error);
                        onError(error)
                    }
                    console.log('Message sent: %s', info.messageId);
                        onSuccess()
                });
            }
           
    
}
