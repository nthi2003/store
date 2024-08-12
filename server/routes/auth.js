const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const { authenToken, authorization } = require('../middleware/authToken');

router.post('/register', authController.createUser);
router.post('/login', authController.loginUser);
router.post('/profile',authenToken , authController.loginUser);
router.put('/profileUpdate',authenToken , authController.updateUserProfile);

module.exports = router;
