const mongodb = require('mongodb')
const mongoClient = mongodb.MongoClient

const getDatabase = async () => {
    const client = await mongoClient.connect("mongodb://localhost:27017")
    let database = client.db('sajin')
    return database
}

module.exports = { getDatabase }