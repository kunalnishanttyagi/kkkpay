const express=require('express');
const app=express();
const jwtsecretkey=require("../config")
const jwt=require("jsonwebtoken")
const router=express.Router();
const bycrypt=require('bcrypt');

const user=require("../Schema/Signupschema")
const bodyParser = require("body-parser");
const cookieParser = require('cookie-parser');
router.get(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));

router.get('/',async(req,res)=>{
    console.log("hii here from server");
    try{
        const data=await user.find();
        res.json(data);
    }
    catch(err){
        res.status(500).send("error occured");
    }
})
module.exports=router
