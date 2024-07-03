const {MongoClient} = require('mongodb')
const dotenv = require('dotenv')

dotenv.config()

const url = process.env.MONGO_URL
console.log('MongoDB URL',url);

const client = new MongoClient(url)

async function connectDB() {
    try{
        await client.connect();
        console.log("Connected to MongoDB")
    }catch(e){
        console.log("error in Connection", e)
    }
}

module.exports = {connectDB , client}