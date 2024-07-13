const express = require('express');
const router = express.Router();
const categoryService = require('../controllers/categoryController');
const {authenToken , authorization} = require('../middleware/authToken')

router.post('/createCategory', authenToken , authorization , categoryService.createCategory);
router.get('/getAllCategory', authenToken , authorization , categoryService.getAllCategory);
router.put('/updateCategory/:id', authenToken , authorization , categoryService.updateCategory);
router.delete('/deleteCategory/:id', authenToken , authorization , categoryService.deleteCategory);
module.exports = router;
