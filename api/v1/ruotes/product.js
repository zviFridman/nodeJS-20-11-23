const router=require('express').Router();

const{

    getProduct,
    getProductById,
    updateProduct,
    addProduct,
    deleteProduct
}=require('../controllers/product')




router.get('/',getProduct);
router.get('/:id',getProductById);
router.patch('/:id',updateProduct);
router.post('/',addProduct);
router.delete('/:id',deleteProduct)


module.exports=router;








