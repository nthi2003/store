const Category = require('../model/Category')
const createCategory = async({name}) => {
    try {
        const checkCatagory = await Category.findOne({name})
        if (checkCatagory) {
            return {
                status: 'error',
                message: 'Category đã tồn tại'
            };
        }
        const category = await Category.create({
            name
        })
        return {
            status: 'success',
            message: 'Thành công',
            category
        }
    }
    catch (error) {
        return {
            status: 'error',
            message: error.message,
        }
    }
}
module.exports = {
    createCategory
}