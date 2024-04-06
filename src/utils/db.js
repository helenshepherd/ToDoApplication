const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const uri = `mongodb+srv://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@cluster0.1zxa37l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
        await mongoose.connect(uri, {});
        console.info('DATABASE CONNECTED SUCCESSFULLY')
    } catch (error) {
        console.log(`DATABASE CONNECTION FAILED ${error}`)
    }
}

module.exports = {
    connectDB
}