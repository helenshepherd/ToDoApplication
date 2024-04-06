const mongoose = require('mongoose')

const toDoItemSchema = new mongoose.Schema({
    id: String,
    content : String,
})

const ToDoItem = mongoose.model('toDoItems',toDoItemSchema)

module.exports = {
    ToDoItem
}