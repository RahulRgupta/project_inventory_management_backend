const mongoose = require('mongoose');
require('dotenv').config()
const conn1 = mongoose.connect(process.env.DATABASE);

if(conn1){
    console.log("Connected to db")
}else{
    console.log("Not connected")
}
module.exports = conn1;