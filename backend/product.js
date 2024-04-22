const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  product_price: {
    type: Number,
    required: true,
    min: 0,
  },
  product_discount: {
    type: Number,
    required: true,
    min: 0,
  },
  product_description: {
    type: String,
    required: true,
  },
  product_category: {
    type: String,
    required: true,
  },
  product_vendor: {
    type: String,
    required: true,
  },
  product_size: {
    type: Array,
    required: true,
  },
  product_picture: {
    type: String, // Store the image path or URL
  },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
