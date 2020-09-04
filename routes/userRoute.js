const express       = require('express');
const userModel     = require('../models/user');
const jwt           = require('jsonwebtoken');
const passsport     = require('passport');

const router = express.Router();


router.post('/adduser',async (req,res)=>{
    console.log('sdfsd')
     const user = new userModel({
         username:req.body.uname,
         email:req.body.email,
         password:req.body.password
     });
     await user.save((err,userData)=>{
         if(err){
             console.log(err);
             res.json({msg:'error'});
         }
         else{
         res.json({data:userData,msg:'success'});
         }
     });
});


router.post('/login',(req,res)=>{
      userModel.email(req.body.email,(err,emailData)=>{
         if(err){
             res.json({err:err,msg:'error'});
         }
         else if(emailData){
         userModel.password(req.body.password,(err,passData)=>{
            if(err){
                res.json({err:err,msg:'error'});
            }
            if(passData){
            var x = jwt.sign(
                {email:req.body.email},
                process.env.JWT_SECRET_KEY,
                {expiresIn:'1h'}
            );
            console.log('xxxxx',x);
            res.json({token:x,msg:'success'});
            }
            else{
                res.json({msg:'incorrect username password'});
            }
      });
     }
     else{
         res.json({msg:'user is not registered'});
     }
    });
});

router.get('/userData',passsport.authenticate('jwt',{session:false}),(req,res)=>{
    console.log(req.user)
    res.json({udata:req.user[0].username});
});

module.exports = router;