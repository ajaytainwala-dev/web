// node mailer allows you to send email
// const nodemailer = require('nodemailer');
import nodemailer from "nodemailer";
import dotenv from "dotenv"
if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}


const sendEmail = (email, esubjects, message) => {

  const transporter = nodemailer.createTransport({

    host: "smtp.gmail.email",
    service: "gmail",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL_FROM,
      pass: process.env.EMAIL_PASSWORD,
    },
  })

  const HTML_Message = `
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Contact</title>
    </head>
    <body style=" margin: 0;
    padding: 0;
    box-sizing: border-box;font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4;">
      <div class="container" style="width: 100%;
            padding: auto;">
        <div class="header" style="background-color: rgb(22, 26, 57);
            padding: 10px;
            text-align: center;">
          <h1 style="color: white;text-align:center;">
           Contact
          </h1>
        </div>
        <div class="text-container" style=" background-color: white;
            padding: 20px;
            border-radius: 5px;">
          <p><span style="  font-size: 1.2rem;
                    font-weight: 500;
                    line-height: 2rem;">Hello Gyan Academy,</span> <br>
            ${esubjects} <br><br>
            <span style="  font-size: 1rem;
                    font-weight: 400;
                    line-height: 1.5rem;">${message}</span>
                    <br><br>
                    From,
                    <br>
                    ${email}
          </p>
        </div>
          <div class="foot" style=" background-color: rgb(22, 26, 57);
            padding: 1rem;
            text-align: center;">
            <h4 style="color: white;"> &copy; GACS | All rights reserved
              <script>
                document.write(new Date().getFullYear());
              </script>
            </h4>
    
          </div>
      
    
    </body>
    
    </html>`;


    
  const mailOptions = {
    from: {
      name: "Somebody tried reaching you!",
      address: process.env.EMAIL_FROM
    },
    to: "sngyan.acs@gmail.com",
    subject: esubjects,
    html: HTML_Message,
  }
  // 
  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.log(err)
    } else {
      console.log(info)
    }
  })
}

module.exports = sendEmail