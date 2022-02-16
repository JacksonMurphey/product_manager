const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, 'Required: Please name your product'],
        minlength: [3, 'The Product name must be at least 3 characters']
    },

    price: {
        type: Number,
        required: [true, 'Required: Please price your product'],
        min: [0.99, 'Minimum Price a product can be is: $0.99']
    },

    description: {
        type: String,
        required: [true, 'Required: Please describe your product'],
        minlength: [10, 'Description must be at least 10 characters']
    }

}, { timestamps: true })

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;