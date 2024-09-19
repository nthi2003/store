const posterSevice = require('../service/posterSevice');

const createPoster = async (req, res) => {
    try {
        const data = req.body;
        const files = req.files || {};
        const poster = await posterSevice.createPoster(data, files);
        return res.status(200).json(poster);
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
    const { posterId } = req.params;
    const data = req.body;
    const files = req.files || {};

    console.log('Received files:', files);
    console.log('Received data:', data);

    try {
        const poster = await posterSevice.updatePoster(posterId, data, files);
        res.status(200).json(poster);
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

const deleteImagesPoster = async (req, res) => {
    const { id, imageId, imageType } = req.params;

    if (!id || !imageId || !imageType) {
        return res.status(400).json({
            status: 'error',
            message: 'Thông tin điền vào còn thiếu'
        });
    }

    try {
        const response = await posterSevice.deleteImagesPoster(id, imageId, imageType);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

module.exports = {
    createPoster,
    getAll,
    updatePoster,
    deleteImagesPoster
};
