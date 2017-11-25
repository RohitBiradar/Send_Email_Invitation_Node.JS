
var nodemailer = require('nodemailer');
var ejs = require('ejs');
var fs = require('fs');

var transporter = nodemailer.createTransport({
   host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'your email',
      pass: 'your passsword'
    }
});
var mailOptions = {
    from: 'your enail',
    to: 'invitee email',
    subject: 'Scapic | Online Aptitude test',
    html: ejs.render( fs.readFileSync('./views/email.ejs', 'utf-8') , {message: 'Hello it works'})
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });