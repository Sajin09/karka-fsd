const express = require('express')
const db = require('../models/db')
const bcrypt = require('bcrypt');
const route = express.Router()

route.get('/list', async (req, res) => {
    const database = await db.getDatabase()
    const collection = database.collection('users')
    let cursor = await collection.find({})
    let data = await cursor.toArray()
    return res.status(200).json({ data: data })
})

route.post('/add', async (req, res) => {
    let request = req.body
    const database = await db.getDatabase()
    const collection = database.collection('users')

    let insertdata = {
        name: request.name,
        age: request.age
    }

    await collection.insertOne(insertdata)

    return res.status(200).json({ message: "Inserted Successfully" })
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

module.exports = route
