const express = require('express')
const bodyParser = require('body-parser')
const userRoutes = require('./routes/user')
const Script = require('./routes/script')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use('/users', userRoutes)
app.use('/script', Script)

app.use((req, res, next) => {
    res.status(404).send("<h1> Page Not Found </h1>")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})
