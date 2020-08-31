const express       = require('express');
const mongo         = require('mongoose');
const bodyParser    = require('body-parser');
const cors          = require('cors');
const path          = require('path');
const conDB         = require('./config/db').connect;
const passport      = require('passport');

require('./config/jwtAuth');

//init app
const app =express();

//connect to mongodb
mongo.connect(conDB,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log('connected to db'))
.catch((err)=>console.log(err));



//bodyParser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//passport
app.use(passport.initialize());


//cors
app.use(cors());

//static folder path
app.use(express.static(path.resolve(__dirname,'public')));

//routes
app.use('/api/user',require('./routes/userRoute'));

//port 
const port = process.env.PORT || 3000;
app.listen(port,()=>console.log('server run at port'+port));

module.exports = app;