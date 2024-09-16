const express = require('express');
const router = express.Router();
const productController = require('../conroller/productController')
const middaleware = require('../middleware/authMiddleware')

router.post('/addProduct',middaleware,productController.addProduct)
router.get('/getProduct',productController.getProduct)
router.patch('/updateProduct',middaleware,productController.updatedProduct)
router.delete('/deleteProduct',middaleware,productController.deleteProduct)


module.exports= router