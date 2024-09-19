const Product = require('../model/Products');
const Category = require('../model/Category');
const cloudinary = require('../utils/cloudinary');

const uploadImages = async (files) => {
    try {
        const imageUrls = [];
        
        for (const file of files) {
            const result = await cloudinary.uploader.upload(file.path, { folder: 'products' });
       
            
            if (result && result.public_id && result.secure_url) {
                imageUrls.push({
                    public_id: result.public_id,
                    url: result.secure_url
                });
            } else {
                return {
                    status: 'error',
                    message: 'Không có file ảnh hợp lệ',
                };
            }
        }

        return imageUrls;
    } catch (error) {
        return { status: 'error', message: error.message };
    }
};

const createProduct = async ({
    name, price, title, categoryid, categoryName, Stock, CPU, CPUDETAIL, RAMDETAIL,
    RAM, Screen, Port, Keyboard, Audio, Lan, Bluetooth, Webcam, Battery,
    Wifi, Weight, Size, LCD, VGA, SSD, Color, OS, HZ, images
}) => {
    try {
        if (!categoryid) {
            return { status: 'error', message: 'CategoryID không tồn tại' };
        }

        const category = await Category.findById(categoryid);
        if (!category) {
            return { status: 'error', message: 'Không tìm thấy danh mục' };
        }

        const checkProduct = await Product.findOne({ name });
        if (checkProduct) {
            return { status: 'error', message: 'Sản phẩm đã tồn tại' };
        }

        const uploadResults = await uploadImages(images);


        if (uploadResults.status === 'error') {
            return uploadResults;
        }

        const product = await Product.create({
            name,
            price,
            title,
            images: uploadResults, 
            categoryid,
            categoryName,
            CPU,
            CPUDETAIL,
            RAMDETAIL,
            RAM,
            Wifi,
            SSD,
      
            Screen,
            Port,
            Keyboard,
            Audio,
            Lan,
            Bluetooth,
            Webcam,
        
            Battery,
            Weight,
            Size,
            LCD,
            VGA,
            Color,
            OS,
            HZ,
            Stock
        });

        return { status: 'success', message: 'Sản phẩm đã được tạo thành công', product };
    } catch (error) {
        return { status: 'error', message: error.message };
    }
};

const getAll  = async () => {
    try {
      const products = await Product.find();
      return {
        status: 'success',
        message: 'Thành công',
        products
      }
    }
    catch (error) {
        return {
            status: 'error',
            message: error.message
        };  
    }
}
const getAllProducts = async (page, limit) => {
    try {
        const skip = (page - 1) * limit;
        const products = await Product.find().skip(skip).limit(limit);
        const totalProduct = await Product.countDocuments();
        return {
            status: 'success',
            message: 'Thành công',
            products,
            totalProduct,
            totalPages: Math.ceil(totalProduct / limit),
            currentPage: page
        };
    } catch (error) {
        return {
            status: 'error',
            message: error.message
        };
    }
};

const getProductDetails = async (id) => {
    try {
       const product = await Product.findById(id)
       if(!product) {
        return {
            status: 'error',
            message: 'Không tìm tháy sản phẩm'
        }
       }
       return {
        status : 'success',
        message : 'Thành công',
        product
       }
    }
    catch (error) {
        return {
            status: 'error',
            message: error.message
        }
    }
} 

const deleteProduct = async(id) => {
    try {
        const product = await Product.findById(id);
        if(!product) {
            return {
                status: 'error',
                message: 'Sản phẩm không tồn tại'
            }
        }
        if(product.images && product.images.public_id) {
            await cloudinary.uploader.destroy(product.images.public_id)
        }
        await Product.findByIdAndDelete(id)
        return {
            status: 'success',
            message : 'Xóa sản phẩm thành công'

        }

    }
    catch (error) {
        return {
            status: 'error',
            message: error.message
        }
    }
}
const deleteImageProduct = async (id , imageId) => {
    try {
        const product = await Product.findById(id);
        if(!product) {
            return {
                status: 'error',
                message: 'Sản phẩm không tồn tại '
            }
        }
        const imageArray = product.images.findIndex(image => image._id.toString() === imageId);

        if(imageArray === -1) {
            return {
                status : 'error',
                message : 'Ảnh không tồn tại'
            }
        }
        const imageToDelete = product.images[imageArray]
        if (imageToDelete.public_id) {
             await cloudinary.uploader.destroy(imageToDelete.public_id)
    
        }
        product.images.splice(imageArray, 1);
        await product.save();

        return {
            status: 'success',
            message: 'Xóa ảnh thành công'
        };

    }
    catch (error) {
        return {
            status: 'error',
            message: error.message
        }
    }

}
const updateProduct = async (id, updateData) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true });
        if (!updatedProduct) {
            return { status: 'error', message: 'Sản phẩm không tồn tại' };
        }
        return { status: 'success', message: 'Sản phẩm đã được cập nhật thành công', product: updatedProduct };
    } catch (error) {
        return { status: 'error', message: error.message };
    }
};

module.exports = {
    createProduct,
    getAllProducts,
    deleteProduct,
    uploadImages,
    updateProduct,
    getProductDetails,
    deleteImageProduct,
    getAll

};
