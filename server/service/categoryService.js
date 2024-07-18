const Category = require('../model/Category')
const cloudinary = require('../utils/cloudinary')
const createCategory = async ({ name, image }) => {
    try {
        const result = await cloudinary.uploader.upload(image, {
            folder: "categorys",
        });

        const checkCategory = await Category.findOne({ name });
        if (checkCategory) {
            return {
                status: 'error',
                message: 'Category đã tồn tại'
            };
        }

        const category = await Category.create({
            name,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            }
        });

        return {
            status: 'success',
            message: 'Thành công',
            category
        };
    } catch (error) {
        return {
            status: 'error',
            message: error.message,
        };
    }
};

const getAllCategory = async (page , limit) => {
    try {
         const skip = (page - 1) * limit
         const categorys = await Category.find().skip(skip).limit(limit)
         const totalCategory = await Category.countDocuments()
         return {
            status: 'success',
            message: 'Thành công',
            categorys,
            totalCategory,
            totalPages: Math.ceil(totalCategory / limit),
            currentPage: page,

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
         const categorys = await Category.findByIdAndUpdate(id , {name})
         return {
            status: 'success',
            message: 'Thành công',
            categorys
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
    const ChecckId = await Category.findById(id)
    if(!ChecckId) {
        return {
            status: 'error',
            message: 'Id không tồn tại'
        }
    }
    try {
        await Category.findByIdAndDelete(id)
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