const categoryService = require('../service/categoryService')
const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const file = req.files?.image;

        if (!file) {
            return res.status(400).json({
                status: 'error',
                message: 'Không tìm thấy file'
            });
        }

  

        const response = await categoryService.createCategory({ name, image: file.tempFilePath });
        
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};


const getAllCategory = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 5
        const response = await categoryService.getAllCategory(page , limit )
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(500).json({
            status: 'error',
            message: e.message
        })
    }
}
const updateCategory = async (req, res) => {
    const {id} = req.params;
    const {name} = req.body;
    const file = req.files?.image;
    try {
        const response = await categoryService.updateCategory(id, name, file ? file.tempFilePath : null);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(500).json({
            status: 'error',
            message: e.message
        })
    }

}
const deleteImgateCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await categoryService.deleteImgateCategory(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}
const deleteCategory = async (req, res) => {
    const { id } = req.params;

    try {
        const response = await categoryService.deleteCategory(id);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

module.exports = {
    createCategory,
    getAllCategory,
    updateCategory,
    deleteImgateCategory,
    deleteCategory
    
}