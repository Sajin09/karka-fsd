const nodemailer = require('nodemailer');
// const Mailgen = require('mailgen');
require('dotenv').config();

const sendEmail = () => {
    let config = {
        service: 'gmail', // your email domain
        auth: {
            user: process.env.NODEJS_GMAIL_APP_USER,   // your email address
            pass: process.env.NODEJS_GMAIL_APP_PASSWORD // your password
        }
    }
    let transporter = nodemailer.createTransport(config);

    let message = {
        from: process.env.NODEJS_GMAIL_APP_USER, // sender address
        to: "sivaranjanishiva24@gmail.com", // list of receivers
        subject: 'Welcome to ABC Website!', // Subject line
        html: "<b>Hello world?</b>", // html body
        // attachments: [ // use URL as an attachment
        //     {
        //       filename: 'receipt_test.pdf',
        //       path: 'receipt_test.pdf',
        //       cid: 'uniqreceipt_test.pdf' 
        //     }
        // ]
    };

    transporter.sendMail(message).then((info) => {
        let data = {
            msg: "Email sent",
            info: info.messageId,
            preview: nodemailer.getTestMessageUrl(info)
        }
        return data;

    }).catch((err) => {
        return err;
    }
    );
}

module.exports = {sendEmail}