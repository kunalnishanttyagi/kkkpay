const express=require('express');
const app=express();
const jwt =require('jsonwebtoken');
const { jwtsecretkey } = require("../config");
const router=express.Router();
const signupschema=require("../Schema/Signupschema")
// const bodyParser = require("body-parser")
const bycrypt=require('bcrypt');
app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: true }));
router.get('/' ,(req,res)=>{
    res.send("Hii signin here")

})
router.post('/',async(req,res)=>{
    console.log("hii here from server");
    try{
        console.log("hii here from server");
        const data=req.body;
        if(!(data.username && data.password && data.email && data.firstname && data.lastname)){
            console.log("data hi shi se nhi aaya")
            res.send("data hi shi se nhi aaya");
        }
        else{
            console.log(data);
        }
        // lets hash password
        const hashedpassword=await bycrypt.hash(data.password,10);
        console.log(hashedpassword)
        // const temp=await new signupschema(data);
        const newuser=await signupschema.create(
            {
                firstname: data.firstname,
                lastname: data.lastname,
                email: data.email,
                password: hashedpassword,username: data.username
            }
        );
        // const token=await jwt.sign({
        //     username: data.username
        // },jwtsecretkey)
        // newuser.token=token;
        res.status(200).send("user creaed successfully ");
    }
    catch(err){
        res.status(500).send("couldnot create user"+err);
    }

})
module.exports=router
