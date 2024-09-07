const posterSevice = require('../service/posterSevice');

const createPoster = async (req, res) => {
    try {

        const posterData = req.body;
        const files = {
            headerFiles: req.files.headerFiles || [],
            slickFiles: req.files.slickFiles || [],
            leftSlickFiles: req.files.leftSlickFiles || [],
            bottomSlickFiles: req.files.bottomSlickFiles || [],
            bottomFiles: req.files.bottomFiles || []
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
const getAll = async (req, res) => {
    try {
      const response = await posterSevice.getAll();
      return res.status(200).json(response);
    }
    catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
}
const updatePoster = async (req, res) => {
   
       const posterId =  req.params.id;
       const posterData = req.body;
       const files = req.files
       try {
           const uploadPoster = await posterSevice.updatePoster(posterId, posterData, files);
           res.status(200).json({
             status : 'success',
             message : 'Cập nhật thành công poster',
            uploadPoster
           })
       }
    
    catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
}
module.exports = {
    createPoster,
    getAll,
    updatePoster
};
