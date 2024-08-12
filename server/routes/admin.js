const express = require('express')
const router = express.Router();
const { authenToken, authorization } = require('../middleware/authToken');
const adminController = require('../controllers/adminController')
router.get('/doashboard', authenToken, authorization,  adminController.adminPage)
router.get('/getAllUsers', authenToken, authorization, adminController.getAllUsers)
router.put('/updateUsers/:id', authenToken, authorization, adminController.updateUsers)
router.delete('/deleteUsers/:id', authenToken, authorization, adminController.deleteUsers)
module.exports = router;