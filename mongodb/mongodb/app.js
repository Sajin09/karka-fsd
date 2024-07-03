const express = require("express")
const userRoutes = require('./routes/users')
const scriptRoutes = require('./routes/script')
require('./jobs/schedule')
const expressWinston = require('express-winston')
const cors = require("cors")

const app = express()
const bodyParser = require("body-parser")
const { transports, format } = require("winston")


app.use(bodyParser.urlencoded())
app.use(express.json())


const corsOptions ={
    origin : "*",
    methods : ["GET" ,"POST", "PUT", "PATCH"] ,
    preflightcontinue : false,
    optionSuccessStatus : 204
}
app.use(cors(corsOptions))

app.use(expressWinston.logger({
    transports : [
        // new transports.Console(),
        new transports.File({
            level : 'warn',
            filename : "./logs/logWarning.log"
        }),
        new transports.File({
            level : 'error',
            filename : "./logs/logErrors.log"
        })
    ],
    // format : format.timestamp()
    // format : format.json()
    format: format.combine(
        format.json(),
        format.timestamp(),
        format.prettyPrint()
    ),
    statusLevels : true
}))

app.use('/users', userRoutes)
app.use('/', scriptRoutes)

app.get('/23', ()=>{
    throw new Error("dfghjkl;'fghjkl")
})

const myFormat = format.printf(({level, meta, timestamp}) => {
    return `${timestamp} ${level}: ${meta.message}`
})
app.use(expressWinston.errorLogger({
    transports : [
        new transports.File({
            filename : 'logsInternalErrors.log'
        })    
    ],
    format : format.combine(
        format.json(),
        format.timestamp(),
        myFormat 
    )
}))
app.use((req, res) => {
    res.status(500).send("dfghjk")
})

app.listen(3000)