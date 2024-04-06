const app = require('./app')
require('dotenv').config()
const { connectDB } = require('./utils/db')

const PORT = process.env.PORT

const server = app.listen(PORT, (error) => {
  if(error){
    console.log(error)
  }
  connectDB()
  console.log(`SERVER RUNING ON PORT ${PORT}`)
})