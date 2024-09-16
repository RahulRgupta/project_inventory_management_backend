// models/User.js
const {mongoose} = require('mongoose');

require('../db/db')
const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String }
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel
