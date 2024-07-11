const categoryService = require('../service/categoryService')
const createCategory = async (req, res) => {
    try {
        const {name} = req.body;
        
        const response = await categoryService.createCategory({name})
        return res.status(200).json(response)
    } 
    catch (e) {
        return res.status(500).json({
            status: 'error',
            message: e.message
        });
    }
}
module.exports = {
    createCategory
}