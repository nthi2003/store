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

const getAllCategory = async (page, limit) => {
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
const updateCategory = async (id, name, image) => {
    try {
        const category = await Category.findById(id);
        if (!category) {
            return {
                status: 'error',
                message: 'Category không tồn tại'
            };
        }
        const updatedData = { name };
        if (image) {
            if (category.image && category.image.public_id) {
                await cloudinary.uploader.destroy(category.image.public_id);
            }

            const result = await cloudinary.uploader.upload(image, {
                folder: "categorys",

            });

            updatedData.image = {
                public_id: result.public_id,
                url: result.secure_url
            };
        }

        const categorys = await Category.findByIdAndUpdate(id, updatedData)
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
const deleteCategory = async (id) => {
    try {

        const category = await Category.findById(id);
        if (!category) {
            return {
                status: 'error',
                message: 'Id không tồn tại'
            };
        }

        if (category.image && category.image.public_id) {
            await cloudinary.uploader.destroy(category.image.public_id);
        }


        await Category.findByIdAndDelete(id);

        return {
            status: 'success',
            message: 'Xóa category thành công'
        };
    } catch (error) {
        return {
            status: 'error',
            message: error.message
        };
    }
};

module.exports = {
    createCategory,
    updateCategory,
    getAllCategory,
    deleteCategory

}