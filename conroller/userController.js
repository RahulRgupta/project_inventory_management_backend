// routes/auth.js
const express = require('express');
const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();

// Registration endpoint
const register= async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ email, password:hashedPassword });
    await user.save();
   return  res.status(201).send({ success: true, message: 'User registered successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error registering user' });
  }
};


//login

const Login= async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({ email });
  
      // Check if the user exists and the password matches
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
      }
  
      // Generate a token
      const token = jwt.sign({ userId: user._id },process.env.secret_key, { expiresIn: '1h' });
      res.json({success:true, token });
    } catch (error) {
        console.log(error)
      res.status(500).json({ error: 'Error logging in' });
    }
  };
  

module.exports = {register,Login};
