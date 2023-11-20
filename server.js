require('dotenv').config;
const http=require('http');
const app=require('./app')
const port=process.env.PORT;
const srv=http.createServer();
srv.listen(port,()=>{console.log('server app')})



