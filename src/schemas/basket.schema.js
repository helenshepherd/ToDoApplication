const mongoose = require('mongoose');
const BasketItem = require('./basketItem.schema.js'); // Adjust the path to where your basketItemSchema is defined

// Define the Basket schema
const basketSchema = new mongoose.Schema({
    id: String,
    items: [BasketItem], // Array of basket items
});

const Basket = mongoose.model('baskets', basketSchema);

module.exports = {
    Basket
};
