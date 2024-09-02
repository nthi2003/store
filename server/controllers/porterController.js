const posterSevice = require('../service/posterSevice');

const createPoster = async (req, res) => {
    try {
        const posterData = req.body;
        const files = {
            headerFiles: req.files.headerFiles,
            slickFiles: req.files.slickFiles,
            leftSlickFiles: req.files.leftSlickFiles,
            bottomSlickFiles: req.files.bottomSlickFiles,
            bottomFiles: req.files.bottomFiles
        };
        const newPoster = await posterSevice.createPoster(posterData, files);
        return res.status(200).json(newPoster);
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

module.exports = {
    createPoster
};
