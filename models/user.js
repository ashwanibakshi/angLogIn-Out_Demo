const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema(
    {
    username:{
    type:String,
    required:true,
    unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
});

const userModel=module.exports = mongoose.model('user',userSchema);

module.exports.email=(email,cb)=>{
    userModel.find({email:email},(err,userData)=>{
          if(err){
              cb(err,null);
          }else{
              cb(null,userData);
          }
    });
}

module.exports.password = (password,cb)=>{
     userModel.find({password:password},(err,userData)=>{
         if(err){
             cb(err,null);
         }
         if(userData.length){
             cb(null,true);
         }
         else{
             cb(err,false);
         }
     });
}
