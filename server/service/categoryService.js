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
const getAllCategory = async () => {
    try {
         const category = await Category.find()
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
const updateCategory = async(id , name) => {
     try {
         const category = await Category.findByIdAndUpdate(id , {name})
         return {
            status: 'success',
            message: 'Thành công',
            category
         }
     }
     catch (error) {
        return {
            status: 'error',
            error: error.message,
        }
     }
}
const deleteCategory = async(id) => {
    try {
        const category = await Category.findByIdAndDelete(id)
        return {
            status: 'success',
            message: 'Xóa category thành công',

        }
    }
    catch (error) {
        return {
            status: 'error',
            error: error.message,
        }
    }

}
module.exports = {
    createCategory,
    updateCategory,
    getAllCategory,
    deleteCategory

}