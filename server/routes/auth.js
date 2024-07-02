const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenToken } = require('../middleware/authToken');

router.post('/register', authController.createUser);
router.post('/login', authController.loginUser);
router.post('/profile',authenToken , authController.loginUser);

module.exports = router;
