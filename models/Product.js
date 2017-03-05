const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

  name: String,
  price: {
    type: Number,
    min: [0, 'Price cannot be below 0']
  },
  description: String,
  url: String

}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
