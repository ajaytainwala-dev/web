// node mailer allows you to send email
// const nodemailer = require('nodemailer');
import nodemailer from "nodemailer";
import dotenv from "dotenv"
if (process.env.NODE_ENV !== 'production') {
    dotenv.config();
}


const sendEmail = (data, Fname_message,Lname_message, mail_subject) => {

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

    //   const Contact_Message = `
    //     <!DOCTYPE html>
    //     <html lang="en">

    //     <head>
    //       <meta charset="UTF-8">
    //       <meta name="viewport" content="width=device-width, initial-scale=1.0">
    //       <title>Contact</title>
    //     </head>
    //     <body style=" margin: 0;
    //     padding: 0;
    //     box-sizing: border-box;font-family: 'Roboto', sans-serif;
    //     background-color: #f4f4f4;">
    //       <div class="container" style="width: 100%;
    //             padding: auto;">
    //         <div class="header" style="background-color: rgb(22, 26, 57);
    //             padding: 10px;
    //             text-align: center;">
    //           <h1 style="color: white;text-align:center;">
    //            Contact
    //           </h1>
    //         </div>
    //         <div class="text-container" style=" background-color: white;
    //             padding: 20px;
    //             border-radius: 5px;">
    //           <p><span style="  font-size: 1.2rem;
    //                     font-weight: 500;
    //                     line-height: 2rem;">Hello Gyan Academy,</span> <br>
    //             ${esubjects} <br><br>
    //             <span style="  font-size: 1rem;
    //                     font-weight: 400;
    //                     line-height: 1.5rem;">${message}</span>
    //                     <br><br>
    //                     From,
    //                     <br>
    //                     ${email}
    //           </p>
    //         </div>
    //           <div class="foot" style=" background-color: rgb(22, 26, 57);
    //             padding: 1rem;
    //             text-align: center;">
    //             <h4 style="color: white;"> &copy; GACS | All rights reserved
    //               <script>
    //                 document.write(new Date().getFullYear());
    //               </script>
    //             </h4>

    //           </div>


    //     </body>

    //     </html>`;
const Register_HTML=`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Student Registeration</title>

</head>

<body style="margin: 0;padding: 0;box-sizing: border-box;">
    <header
        style="background-color: rgb(7, 97, 130);display: flex;padding: 2rem;align-items: center;justify-content: center;color: white;font-size: larger;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;text-align: center;">
        New Student Registered
    </header>

    <main
        style="display: flex;justify-content: center;align-items: center;padding: 0.9rem;flex-direction: column;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;gap: 5px;">
        <h3 style="
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
            background-color: aqua;padding: 0.6rem;
            border-radius: 1rem;
            width: 100%;
            text-align: center;">
            Registration Details</h3>
            <!-- Personal Details -->
        <div
         style="padding: 0.8rem;display: flex;flex-direction: column;gap: 5px;box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.5);border-radius: 1rem;">
            <h3 style="text-align: center;">Personal Details</h3>
            <!-- First Name -->
            <label>Name</label>
            <input style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.firstName } ${data.lastName}" disabled>
            <!-- DOB -->
            <label >DOB</label>
            <input 
                style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.dateOfBirth}" disabled>
            <!-- Gender -->
            <label >Gender</label>
            <input 
                style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.gender}" disabled>
            <!-- Mother Tongue -->
            <label >Mother Tongue</label>
            <input 
                style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.motherTongue}" disabled>
            <!-- Father Name -->
            <label >Father Name</label>
            <input 
                style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.fatherName}" disabled>
            <!-- Father Occupation -->
            <label >Father Occupation</label>
            <input 
                style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.fatherOccupation}" disabled>
            <!-- Mother Name -->
            <label >Mother Name</label>
            <input 
                style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.motherName}" disabled>
            <!-- Mother Occupation -->
            <label >Mother Occupation</label>
            <input 
                style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.motherOccupation}" disabled>
        </div>
        <!-- Educational Details -->
        <div 
        style="padding: 0.8rem;display: flex;flex-direction: column;gap: 5px;box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.5);border-radius: 1rem;">
            <h3 style="text-align: center;">Educational Details</h3>
            <!-- Class Studying -->
            <label>Class Studying</label>
            <input style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.currentClass}" disabled>
            <!--Previous Class Marks-->
            <label >Previous Class Marks</label>
            <input 
                style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.previousMarks}" disabled>
            <!-- Board/Univeity -->
            <label >Board/University</label>
            <input 
                style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.board}" disabled>
            <!-- School / College -->
            <label >School / College</label>
            <input 
                style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.school}" disabled>
            <!-- Stream -->
            <label >Stream</label>
            <input 
                style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.stream}" disabled>
           
        </div>
        <!-- Student Preferrence -->
        <div 
        style="padding: 0.8rem;display: flex;flex-direction: column;gap: 5px;box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.5);border-radius: 1rem;">
            <h3 style="text-align: center;">Subject Preferrence</h3>
            <!-- Class Studying -->
            <label>Subjects Needed</label>
            <input style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.currentClass}" disabled>
            <!--Others-->
            <label >Others</label>
            <input 
                style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.otherSubjects}" disabled>
            <!-- Mode -->
            <label >Mode</label>
            <input 
                style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.mode}" disabled>
           
           
        </div>
        <!-- Contact Details-->
        <div 
        style="padding: 0.8rem;display: flex;flex-direction: column;gap: 5px;box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.5);border-radius: 1rem;">
            <h3 style="text-align: center;">Contact Details</h3>
            <!-- Student  Number -->
            <label>Student  Number</label>
            <input style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.studentNumber}" disabled>
            <!--Parent's Number-->
            <label >Parent's Number</label>
            <input 
                style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.parentNumber}" disabled>
            <!-- Email-->
            <a href="mailto:${data.email}"style="text-decoration: none;color: black;cursor:pointer;"></a>
            <label >Email</label>
            <input 
                style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);"
                type="text" value="${data.email}" disabled></a>
            <!--Address-->
            <label >Address</label>
        
           <p  style="padding: 0.5rem;border-radius: 0.5rem;color: black;border: 2px solid rgb(126, 1, 242);text-wrap: wrap;">
            ${data.address} </p>
        </div>
    </main>
    <footer
        style="background-color: rgb(7, 97, 130);display: flex;padding: 2rem;align-items: center;justify-content: center;color: white;font-size: larger;font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">


        <h4 style="color: white;text-align: center;"> &copy; GACS | All rights reserved -
            <script>
                document.write(new Date().getFullYear());
            </script>
        </h4>

    </footer>
</body>

</html>`
// console.log(data)

    const mailOptions = {
        from: {
            name:` New student ${Fname_message} ${Lname_message}`,
            address: process.env.EMAIL_FROM
        },
        to: ["sngyan.acs@gmail.com",data.email,"ajaytainwala@gmail.com"],
        subject: mail_subject,
        html:Register_HTML,
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