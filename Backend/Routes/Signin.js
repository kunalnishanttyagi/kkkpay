const express=require('express');
const app=express();
const jwtsecretkey=require("../config")
const jwt=require("jsonwebtoken")
const router=express.Router();
const bycrypt=require('bcrypt');

const user=require("../Schema/Signupschema")
// const bodyParser = require("body-parser");
// const cookieParser = require('cookie-parser');
router.use(express.json());

// router.use(cookieParser());
router.get('/',async(req,res)=>{
    try{
        const data=req.query;
        console.log(data)

        if(!(data.username && data.password)){
            res.send("invalid data sent");
        }
        console.log("data to thik bheja hai")
        const founduser=await user.findOne({
            username: data.username
            
        })
        // if(founduser){
        //     console.log(founduser.password," hii  ");
        // }
        // verify if correct password or not
        // console.log(data)
        // console.log(founduser.password)
        // if(hashedpasswordp)
        // console.log(hashedpassword)
        // console.log(founduser.password)
        if(await bycrypt.compare(data.password,founduser.password)){
            // const token=await jwt.sign({
            //     userid: data.username
            // },jwtsecretkey)
            // founduser.token=token;
            // res.cookie("cookietoken",token).send("valid user"+token);
            res.send(founduser)
        }

        
            
    }
    catch(err){
        
        res.status(500).json({msg: err});
    }

})
module.exports=router
