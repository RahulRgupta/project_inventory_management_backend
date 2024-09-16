const productModel = require('../models/productModel')

// Add a new product
const addProduct= async (req, res) => {
    try {
      const { name, description, price, category, stock } = req.body;
      
      const newProduct = new productModel({
        name,
        description,
        price,
        category,
        stock,
      });
      
      const savedProduct = await newProduct.save();
      
      return res.status(201).json({
        success: true,
        message: 'Product added successfully!',
        product: savedProduct,
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Error adding product', error });
    }
  };


  // routes/productRoutes.js
 const getProduct = async (req, res) => {
    try {
      const products = await productModel.find();
      return res.status(200).json({
        success: true,
        products,
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Error fetching products', error });
    }
  };
  
  // routes/productRoutes.js
const updatedProduct =  async (req, res) => {
    const { id } = req.query;
    const { name, description, price, category, stock } = req.body;
  
    try {
      const updatedProduct = await productModel.findByIdAndUpdate(
        id,
        { name, description, price, category, stock },
        { new: true } // Return the updated product
      );
      
      if (!updatedProduct) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
  
      return res.status(200).json({
        success: true,
        message: 'Product updated successfully!',
        product: updatedProduct,
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Error updating product', error });
    }
  };

  // routes/productRoutes.js
const deleteProduct =  async (req, res) => {
    const { id } = req.query;
  
    try {
      const deletedProduct = await productModel.findByIdAndDelete(id);
      
      if (!deletedProduct) {
        return res.status(404).json({ success: false, message: 'Product not found' });
      }
  
      return res.status(200).json({
        success: true,
        message: 'Product deleted successfully!',
      });
    } catch (error) {
      return res.status(500).json({ success: false, message: 'Error deleting product', error });
    }
  };
  
  

  module.exports ={addProduct,getProduct,updatedProduct,deleteProduct}