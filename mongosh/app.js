const mongoose = require('mongoose')
const User = require('./models/userSchema')

mongoose.connect('mongodb://localhost:27017/karka')
.then(() => {
    console.log("Connected")
})
.catch(()=>{
    console.log("Connection Error")
})
const user = new User({
    name : "Shivu",
    age : 28
})
// user.save().then(() =>{
//     console.log("User Saved")
// })

async function run () {
    const inserteddata = await User.create({
        name : "Shiva",
        age : 55,
    })
    console.log(inserteddata)
}
run()