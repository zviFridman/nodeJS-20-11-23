module.exports={
    getProduct:(req,res)=>{
        return res.status(200).json({msg:'allProduct'});
    },

    getProductById:(req,res)=>{
        return res.status(200).json({msg:'getProductById'});

    },
    updateProduct:(req,res)=>{
        return res.status(200).json({msg:'updateProduct'});
    },
    addProduct:(req,res)=>{
        console.log(req.bodyn)
        return res.status(200).json({msg:'addProduct'});
    },
    deleteProduct:(req,res)=>{
        return res.status(200).json({msg:'deleteProduct'});
    }

}






