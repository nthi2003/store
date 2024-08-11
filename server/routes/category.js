const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const {authenToken , authorization} = require('../middleware/authToken')

const upload = require('../middleware/upload');
router.post('/createCategory', authenToken, authorization, upload.single('image'), categoryController.createCategory);
router.get('/getAllCategory', authenToken , authorization , categoryController.getAllCategory);
router.put('/updateCategory/:id', authenToken, authorization, upload.single('image'), categoryController.updateCategory);
router.delete('/deleteCategory/:id', authenToken , authorization , categoryController.deleteCategory);
router.delete('/deleteImageCategory/:id', authenToken , authorization , categoryController.deleteImgateCategory);
module.exports = router;
