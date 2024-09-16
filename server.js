const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
require('dotenv').config();

// Initialize Express app
const app = express();
const port = process.env.PORT || 8000;

const corsConfig ={
    origin:"*",
    Credential:true,
    methods:["GET","POST","PATCH","PUT","DELETE"],
  };
  app.options("",cors(corsConfig))
  app.use(cors(corsConfig))
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