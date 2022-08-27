require("dotenv").config();
const express = require("express");
const app = express();
const mongoose=require("mongoose")
require('./db/connection');

const Products = require('./models/productsSchema');

const DefaultData = require('./defaultData')
const cors = require("cors");

app.use(express.json());
app.use(cors());

const port = 8005;
app.listen(port,()=>{
    console.log(`console is running on port number ${port}`);
})

DefaultData();