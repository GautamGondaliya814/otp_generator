var nodemailer = require('nodemailer');
exports.send_mail = async(req,res) =>{
     var transporter = nodemailer.createTransport({
          service: 'gmail',
          auth: {
            user: 'gautamgondaliya814@gmail.com',
            pass: 'wukrksqyewmlwlam'
          }
        });
        
        var mailOptions = {
          from: 'gautamgondaliya814@gmail.com',
          to: 'gondaliyagautam814@gmail.com',
          subject: 'Sending Email using Node.js',
          text: 'OTP:'+Math.ceil(Math.random()*1000000)
        };
        
        transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error);
          } else {
               res.status(200).json({
                    status:info.response
               })
          //   console.log('Email sent: ' + info.response);
          }
        });
}