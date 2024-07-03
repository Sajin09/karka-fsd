const express = require('express');
const nodemailer = require('nodemailer');
const route = express.Router();
require('dotenv').config();

route.post('/email', (req, res) => {
    let config = {
        service: "gmail",
        auth: {
            user: process.env.NODEJS_GMAIL_APP_USER,
            pass: process.env.NODEJS_GMAIL_APP_PASSWORD
        }
    };

    let transporter = nodemailer.createTransport(config);

    let message = {
        from: process.env.NODEJS_GMAIL_APP_USER,
        to: "manojindhuja6@gmail.com",
        subject: "Welcome to Karka",
        html: "<b> akoooooooooiiiiii </b>"
    };

    transporter.sendMail(message)
        .then((info) => {
            return res.status(201).json({
                msg: "Email sent",
                info: info.messageId
            });
        })
        .catch((err) => {
            return res.status(500).json({ msg: err });
        });
});

module.exports = route;
