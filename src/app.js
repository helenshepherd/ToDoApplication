const express = require('express')
const cors = require('cors')
const  userRoutes = require('./routes/user.routes')
const  toDoItemRoutes = require('./routes/toDoItem.routes')
const  basketRoutes = require('./routes/basket.routes')


const app = express()
//ADDING COMMENT
app.use(express.json())

app.use(cors({
    origin: ['http://localhost:3000'],
    methods :'GET,PUT,POST,DELETE',
    optionsSuccessStatus: 200
}))

app.get('/',(req,res)=>{
 res.send('SERVER IS UP')
})

app.use('/user', userRoutes)
app.use('/toDoItem', toDoItemRoutes)
app.use('/basket', basketRoutes)


module.exports = app

