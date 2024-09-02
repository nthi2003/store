const express = require('express');
const router = express.Router();
const posterController = require('../controllers/porterController');
const { authenToken, authorization } = require('../middleware/authToken');
const uploads = require('../middleware/uploads');

router.post('/createPoster', uploads, authenToken, authorization, posterController.createPoster);

module.exports = router;
