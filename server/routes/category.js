const express = require('express');
const router = express.Router();
const categoryService = require('../controllers/categoryController');

router.post('/createCategory', categoryService.createCategory);
module.exports = router;
