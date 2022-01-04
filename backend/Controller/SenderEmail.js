const hbs = require('nodemailer-express-handlebars');
const nodemailer = require('nodemailer');
// const page = "http://localhost:3000";
const page = "https://comercio-electronico.herokuapp.com";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  tls: {
    ciphers:'SSLv3',
    rejectUnauthorized: false
  },
  auth: {
    user: "luisestuardo-bolanosgonzalez@cunoc.edu.gt", 
    pass: "dshq glnx pcju jtpk", 
  }
});

transporter.use('compile', hbs({
  viewEngine: {
      extName: '.hbs',
      partialsDir: './View/email_templates/',
      layoutsDir: './View/email_templates/',
      defaultLayout: 'verification.hbs',
  },

  //viewEngine: 'express-handlebars',
  viewPath: './View/email_templates/',
  extName: '.hbs',

}));


async function sendVerificationEmail(email, token, jwtToken){
  return new Promise((resolve, reject) => {
    let mailOptions = {
      from: 'hola',
      to: email,
      subject: 'Verifica tu cuenta',
      context: {
        // verificationLink: `${page}/verification2?token=${token}&email=${email}&jwtToken=${jwtToken}`
        verificationLink: `${page}/verification2/${token}/${email}/${jwtToken}`
      },
      template: 'verification'
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if(error){
        console.log("err1 ", error);
        reject(error);
      } else {
        resolve("Activation link has been sent!")
      }
    })
  })
}

module.exports = {
  sendVerificationEmail
}













/*                                                        CODIGO FUNCIONAL
async function sender(req, res){
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, 
    auth: {
    user: "luisestuardo-bolanosgonzalez@cunoc.edu.gt", 
    pass: "dshq glnx pcju jtpk", 
  },
});    

transporter.verify().then(() => {
  console.log('Ready for send emails');
})

console.log(req.body.email);

let send = await transporter.sendMail( {
    from: '"Verification email 👻"',
    to: req.body.email, 
    subject: "Verification email",
    html: `<h1>Verification email</h1>
            <ul>
                <li>Correo de prueba</li>
            </ul>`,
  });


  console.log('mensaje enviado');
}

module.exports = { sender }

*/