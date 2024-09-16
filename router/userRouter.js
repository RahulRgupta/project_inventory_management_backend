const express = require('express');
const router = express.Router();
const userController = require('../conroller/userController')
router.post('/register',userController.register)
router.post('/login',userController.Login)

module.exports= router