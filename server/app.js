require("dotenv").config();
const express = require("express");
const app = express();
const mongoose=require("mongoose")
require('./db/connection');

const Products = require('./models/productsSchema');

const DefaultData = require('./defaultData')

const port = 8005;
app.listen(port,()=>{
    console.log(`console is running on port number ${port}`);
})

DefaultData();