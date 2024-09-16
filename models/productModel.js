// models/User.js
const {mongoose} = require('mongoose');

require('../db/db')
const productSchema = new mongoose.Schema({
  name: { type: String},
  description: { type: String },
  price:{type:Number},
  category:{type:String},
  stock:{type:Number}
});

const productModel = mongoose.model('product', productSchema);

module.exports = productModel
