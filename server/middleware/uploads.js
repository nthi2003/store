const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const uploads = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10MB
}).fields([
    { name: 'headerFiles', maxCount: 10 },
    { name: 'slickFiles', maxCount: 10 },
    { name: 'leftSlickFiles', maxCount: 10 },
    { name: 'bottomSlickFiles', maxCount: 10 },
    { name: 'bottomFiles', maxCount: 10 }
]);

module.exports = uploads;
