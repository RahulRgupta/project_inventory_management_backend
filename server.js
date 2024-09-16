const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 8000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//
const userRouter = require('./router/userRouter')
const productRouter = require('./router/productrouter')

//
app.use(userRouter)
app.use(productRouter)

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})