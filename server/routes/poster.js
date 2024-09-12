const express = require('express');
const router = express.Router();
const posterController = require('../controllers/posterController');
const { authenToken, authorization } = require('../middleware/authToken');
const uploads = require('../middleware/uploads');

router.post('/createPoster', uploads, authenToken, authorization, posterController.createPoster);
router.get('/getAllPoster', posterController.getAll )
router.put('/updatePoster/:id', uploads, authenToken, authorization, posterController.updatePoster )
router.delete('/deleteImagesPoster/:id/:imageType/:imageId', authenToken, authorization, posterController.deleteImagesPoster )

module.exports = router;
