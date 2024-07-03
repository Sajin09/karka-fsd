const schedule = require('node-schedule')
const scriptService = require('../services/emailService') 
const date = new Date(2024, 5, 16, 20, 54, 0);

console.log(date)
schedule.scheduleJob(date, function(){
    console.log("hello world")
})

// schedule.scheduleJob('*/5 * * * * *', function(){
//     console.count("Job done")
// })

// const job = schedule.scheduleJob('*/5 * * * * *', function(){
//     console.count("Job done")
//     scriptService.sendEmail()
//     job.cancel()
// })


// schedule.scheduleJob('m-job', '*/5 * * * * *', function(){
//     console.count("Job done")
//     schedule.cancelJob('m-job')
// //     scriptService.sendEmail()

// })

module.exports = schedule

