const express = require('express')
const route = express.Router()

const scriptService = require('../services/emailService')

route.post('/email',(req, res)=>{
    try{
        scriptService.sendEmail()
    }
    catch(err){
        res.status(500).json({ msg: err });
    }
})

module.exports = route