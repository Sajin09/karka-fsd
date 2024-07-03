const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name : String,
    age : Number,
    createdAt : Date,
    updatedAt : Date,
    hobbies : [String]
})

const userModel = mongoose.model('user', userSchema)

module.exports = userModel