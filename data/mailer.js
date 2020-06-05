const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const nodemailer = require('nodemailer');
const nodeMailerPass = process.env.nodeMailerPass;
const nodeMailerUser = process.env.nodeMailerUser;
const moment = require('moment');

const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.eu',
    port: 465,
    secure: true, //ssl
    auth: {
        user: nodeMailerUser,
        pass: nodeMailerPass
    }
});

function sendMail(req, res, next) {

    const date = moment().format('MMM Do YYYY');

    const { name, email, phone, subject, message } = req.body;

    console.log(req.body)

    let mailOptions = {
        from: nodeMailerUser, // sender address (who sends)
        to: nodeMailerUser, // list of receivers (who receives)
        subject: subject, // Subject line
        replyTo: email,
        html: `<b>${date}</b> <p>Email: ${email}</p> <p>Name: ${name}</p> <p>Phone: ${phone}</p> <p>Message: ${message}</p>` // html body
    };

    return transporter.sendMail(mailOptions)
    .then((email) => {
        console.log('here',email)
        if (email.rejected.length > 0) throw {status: 404, message: 'Rejected'};         
        return res.status(201).send({success: true, msg: 'Enquiry submitted'});       
    })
    .catch((err) => {
        console.log('err1', err)
        if (err.status === 404) return next(err);
        else return next({status: 500, message: 'server error'});
    });
    // .catch(e => e)
    // send mail with defined transport object
    // return new Promise(
    //     (resolve, reject) => {
    //         transporter.sendMail(mailOptions, (error, info) => {
    //             if (error) {
    //                 console.error(`couldn't send mail ${error}`);
    //                 reject(error)
    //             } else {
    //                 console.log('Message sent: ' + info.response);
    //                 resolve()
    //             }
    //         });

    //     })
}

module.exports = {
    sendMail
}