const categoryService = require('../service/categoryService')
const createCategory = async (req, res) => {
    try {
        const {name, image} = req.body;
        
        const response = await categoryService.createCategory({name, image})
        return res.status(200).json(response)
    } 
    catch (e) {
        return res.status(500).json({
            status: 'error',
            message: e.message
        });
    }
}
const getAllCategory = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 9
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
    try {
        const response = await categoryService.updateCategory(id,name);
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(500).json({
            status: 'error',
            message: e.message
        })
    }

}
const deleteCategory = async (req , res) => {
    const {id} = req.params;
   
    try {
        const response = await categoryService.deleteCategory(id)
        return res.status(200).json(response)
    }
    catch (e) {
        return res.status(500).json({
            status: 'error',
            message: e.message
        })
    }
}
module.exports = {
    createCategory,
    getAllCategory,
    updateCategory,
    deleteCategory
    
}