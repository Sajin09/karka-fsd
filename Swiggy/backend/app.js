const express = require("express");
const bodyParser=require('body-parser')
const userRoute=require('./route/appuser')
const cors =require('cors')
const app=express()
app.use(bodyParser.urlencoded())

app.use(express.json())

const corsOption={
    origin:"*",
    methods:"GET,HEAD,POST,PUT,PATCH,DELETE",
    preFlightContinue:false,
    OptionsSuccessStatus:204
}
app.use(cors(corsOption))

app.use('/login',userRoute)


app.use((req,res)=>{
    res.status(404).send("<h1>404 Error , Page not found</h1>")
})

app.listen(3005)