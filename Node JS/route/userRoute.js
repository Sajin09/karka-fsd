const express = require('express');
const bcrypt =require('bcrypt')
const user = require('../models/user')

const router = express.Router()

router.post('/register' , async(req , res) =>{
    try{
        const{ username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password , 10)
        const newUser = {
            username,
            email,
            password:hashedPassword,
        };
        const result = await user.insertOne(newUser);
        res.status(201).json({ message : "user register succesfully", userId : result.insertedId })
    }catch(e){
        console.log("error", e);
        res.status(500).json({message : "internal server Error"})
    }
})

module.exports=router