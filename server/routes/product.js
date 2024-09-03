const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const { authenToken, authorization } = require('../middleware/authToken');

const upload = require('../middleware/upload');

router.post('/createProduct',  upload.array('images', 10) ,authenToken, authorization,  productsController.createProduct);
router.get('/getAllProducts', authenToken, authorization,  productsController.getAllProducts);
router.get('/getAll', authenToken, authorization,  productsController.getAll);
router.put('/updateProduct/:id', upload.array('images', 10), authenToken, authorization, productsController.updateProduct)
router.delete('/deleteProduct/:id', authenToken, authorization, productsController.deleteProduct)
router.get('/getProductDetails/:id', authenToken, authorization, productsController.getProductDetails)
router.delete('/deleteProduct/:id/images/:imageId', authenToken, authorization, productsController.deleteImageProduct)
module.exports = router;
