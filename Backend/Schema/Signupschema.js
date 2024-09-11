const mongoose=require('mongoose');
const userschema=new mongoose.Schema({
    firstname:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        
    },
    balance:{
        type:Number,
        default: 0
    }
})

const newuser=new mongoose.model('newuser',userschema);
module.exports=newuser;