const mongoose=require('mongoose');

const mongourl="mongodb+srv://kunalnishanttyagi:kunalbhai@cluster0.rkurj.mongodb.net/"

mongoose.connect(mongourl,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})



const db=mongoose.connection;

db.on('connected',()=>{
    console.log("database connected")
})


db.on('error',(err)=>{
    console.log("error occured"+err);
})


db.on('disconnected',()=>{
    console.log("database connected")
})

module.exports=db;