const express=require('express');
const app=express();
const morgan=require('morgan')
const productRuoter=require('./api/v1/ruotes/product');
const secure=require('./api/v1/middiewares/secure');
const logger=require('./api/v1/middiewares/logger');
// const categoryRuoter=require('./api/v1/ruotes/category'); 

// app.use(morgan('dev'))

app.use(logger);


app.use(express.json);
app.use(express.urlencoded({
    extended:false
}));
app.use('/product',productRuoter);
// app.use('/category',categoryRuoter);
arrip=['127.0.0.0',]
app.use(secure);





app.all('*',(req,res)=>{
res.status(404).json({msg:'404 not found'})});














module.exports=app;
