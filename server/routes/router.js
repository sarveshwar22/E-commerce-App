const express = require("express");
const router = new express.Router();

const Products = require("../models/productsSchema")
const USER = require("../models/userSchema");

const bcrypt = require("bcryptjs");

//products api
router.get("/getproducts",async (req,res)=>{
    
    try {
        const productsdata = await Products.find();
        console.log("Products");
        res.status(201).json(productsdata);
    } catch (error) {
    
        console.log("error");
    }

})


//individual data
router.get("/getproductsone/:id",async(req,res)=>{

    try {
        const {id} = req.params;
        // console.log(id);
        
        const individualdata = await Products.findOne({id:id});
        // console.log(individualdata);
        res.status(201).json(individualdata);
    } catch (error) {
        // res.status(400).json(individualdata);
        
        console.log("error");
    }

})

//register

router.post("/register",async(req,res)=>{

    // console.log(req.body);
    const {fname,email,mobile,password,cpassword} = req.body;
    if(!fname || !email || !mobile || !password || !cpassword)
    {
        res.status(422).json({error:"Please fill all the details"})
        console.log("No data available");
    };
    
    try {
        const preuser = await USER.findOne({email:email});
        if(preuser)
        {
            res.status(422).json({error:"This user is already registered. Please login"})
        }
        else if(password!=cpassword)
        {
            
            res.status(422).json({error:"Password don't match"})
        }
        else{
            const finalUser = new USER({
                fname,email,mobile,password,cpassword
            }) 
            
            const storedata = await finalUser.save();
            console.log(storedata);
            res.status(201).json(storedata);
        }
    } catch (error) {
        
    }
})


router.post("/login",async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password)
    {
        res.status(400).json({error:"Fill all the details properly"})
    };
    
    try {
        const userlogin = await USER.findOne({email:email});
        // console.log(userlogin);
        
        if(userlogin)
        {
            const isMatch = await bcrypt.compare(password,userlogin.password);
            console.log(isMatch);
            
            if(!isMatch)
            {
                res.status(400).json({error:"Invalid password"})
            }
            else
            {
                res.status(201).json(userlogin)
            }
        }
    } catch (error) {
        res.status(400).json({error:"Invalid Credentials"})
    }
})

module.exports = router;