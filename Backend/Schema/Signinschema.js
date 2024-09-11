const mongoose=require('mongoose');

const userschema=mongoose.Schema({
    username:{
        type: String,
        require: true
    },
    password:{
        type: String,
        required: true
    }
})

const preuser=new mongoose.model('preuser',userschema);
module.exports=preuser;