const express = require('express')
const dotenv = require('dotenv')
const app = express()

const {connectDB} = require('./config/db');
const userRoutes = require('./route/userRoute')

dotenv.config()

const port = process.env.PORT ;

connectDB();

app.use(express.json())

app.use('/api/user' , userRoutes)

app.listen(port , () =>{
    console.log(`server is running on port ${port}`)
})