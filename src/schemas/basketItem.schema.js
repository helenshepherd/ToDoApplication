const mongoose = require('mongoose')

const basketItemSchema = new mongoose.Schema({
    id: String,
    itemName : String,
    price : Number,
    quantity: Number,
})

module.exports = basketItemSchema;