module.exports=
   

      (req,res,next)=>{
        if(req.url='/product')
        {
          let ip=req.ip;
          let status=arrip.find((el)=>rl==ip);
           
          if (!status)
          return res.status(401).json({msg:'you are not cen'});
      
      
        }
           next();
      
      }





