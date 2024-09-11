const express=require('express');
const app=express();
app.use(express.json());
const cors = require('cors');
// const cors = require('cors');
app.use(cors({
    origin: 'http://localhost:3000', // Replace with the actual origin of your frontend
    credentials: true // if you need to include credentials (like cookies)
}));

// app.use(cors());


const db=require("../Database/db")
const signuproute=require("../Routes/Signup")
const signinroute=require("../Routes/Signin")
const dataroute=require("../Routes/Alldata")
const userroute=require("../Routes/User")
app.use('/signup',signuproute)
app.use('/signin',signinroute)
app.use('/alluser' , dataroute)
app.use('/user' , userroute)
app.post('/' ,(req,res)=>{
    res.send("Hii there")

})

app.listen(3001)