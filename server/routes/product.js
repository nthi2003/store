const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const { authenToken, authorization } = require('../middleware/authToken');


router.post('/createProduct', authenToken, authorization,  productsController.createProduct);

router.get('/getAllProducts', authenToken, authorization,  productsController.getAllProducts);

module.exports = router;
