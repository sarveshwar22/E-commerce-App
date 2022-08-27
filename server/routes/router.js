const express = require("express");
const router = new express.Router();

const Products = require("../models/productsSchema")

 
router.get("/getproducts",async (req,res)=>{
    
    try {
        const productsdata = await Products.find();
        // console.log("Products"+productsdata);
        res.status(201).json(productsdata);
    } catch (error) {
    
        console.log("error");
    }

})

module.exports = router;