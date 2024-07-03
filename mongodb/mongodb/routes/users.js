const express = require("express")

const route = express.Router()
const db = require("../models/db")
const ObjectId = db.ObjectId;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
require('dotenv').config()

route.get('/list', async (req, res) =>{
    try{
        let database = await db.getDataBase(); 

        const collection = database.collection('users')
        const cursor = await collection.find({})
        let users = await cursor.toArray()

        return res.status(200).json({data : users})
    }
    catch(error){

    }
    
})

route.post('/add', async (req, res) =>{
    try{
        let request = req.body;
        console.log(req);
        
        let database = await db.getDataBase(); 

        const collection = database.collection('users')
        let data = {name : request.name, age : request.age, place : request.place}
        await collection.insertOne(data)
        

        return res.status(200).send({message : "Inserted Successfuly"})
    }
    catch(error){

    }
})

route.post('/edit', async(req, res) => {
    // let userId;
    // try {
    //     let data  =req.body;
    //     console.log(data.user_id);
    //     userId = new ObjectId(data.user_id);
    //     console.log(userId);
    // } catch (error) {
    //     console.error("Error parsing user_id:", error);
    //     return res.status(400).send({ message: "Invalid user ID" });
    // }


    try{
        let data = req.body;
        console.log("jdsfdkjfskdv");
        console.log(data);
        const database = await db.getDataBase(); 
        const collection = database.collection('users')
        console.log(data.user_id);

        const userId = new ObjectId(data.user_id);
        console.log("ObjectId:", userId);
        let cursor = await collection.find({_id : new ObjectId(data.user_id)})
        let users = await cursor.toArray()
        console.log("users");
        console.log(users);
        console.log(users.length);
       

        if(users.length == 1){
            await collection.updateOne({_id: new ObjectId(data.user_id)}, {$set:{age : data.age}})

            return res.status(200).send({message : "Updated Successfuly"})
        }

        
    }
    catch (error){
            console.log(error)
    }
})

route.post('/register', async(req, res) => {
    const {username, password} = req.body;
    console.log(username);
    console.log(password);
    let database = await db.getDataBase(); 

    const collection = database.collection('users')

    await bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hashedPassword) => {
            const password = hashedPassword;
            
            let data = {username : username, password : password}
            collection.insertOne(data)
            .then(() => res.json("user added..."))
            .catch(err => res.status(400).json('Error : '+err))
            
        })
    }) 
})

route.post('/login1', async(req, res) => {
    try{
        const {username, password} = req.body;
        let database = await db.getDataBase(); 
        
        const collection = database.collection('users')
        const user = await collection.findOne({username : username})
        
        if(!user){
            return res.status(400).send("User not found")
        }

        // let user = await cursor.toArray()
        var validPassword = await bcrypt.compare(password, user.password)

        if(!validPassword){
            return res.status(400).send("Password is incorrect")
        }
        return res.status(200).json("Login successful")
    }
    catch(error){
        console.log(error);
    }
})

route.post('/login', async(req, res) => {
    try{
        const {username, password} = req.body;
        
        const user = {name: username}
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN)

        res.json({accessToken})
    }
    catch(error){
        console.log(error);
    }
})

const verifyToken = (req , res , next) =>{
    const token = req.body.token;
    if(!token){
        return res.status(401)
    }
    jwt.verify(token, process.env.ACCESS_TOKEN, (err,user) => {
        if(err){
            return res.status(401)
        }
        req.user = user
        next()  
    })
}


route.post('/add-products' , verifyToken , (req,res) => {
    console.log(req.body, "req");
    return res.json({"message" :req.body})
})
module.exports = route