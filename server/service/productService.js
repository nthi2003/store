const Product = require('../model/Products');
const Category = require('../model/Category');
const cloudinary = require('../utils/cloudinary');

const uploadImages = async (files) => {
    try {
        const imageUrls = [];
        
        for (const file of files) {
            const result = await cloudinary.uploader.upload(file.path, { folder: 'products' });
            console.log(result); 
            
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
    RAM, GC, Screen, Port, Keyboard, Audio, Lan, Bluetooth, Webcam, OPS, Battery,
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
            GC,
            Screen,
            Port,
            Keyboard,
            Audio,
            Lan,
            Bluetooth,
            Webcam,
            OPS,
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
const updateProduct = async(id, updateData , newImages = [] , imagesToDelete = [] ) => {
    try {
        const product = await Product.findById(id)
    if(!product) {
        return {
            status: 'error',
            message : 'Sản phẩm không tôn tại'
        }
    }

    if(imagesToDelete.length > 0) {
        for (const public_id of imagesToDelete) {
            const imageIndex = product.images.findIndex(image => image.public_id === public_id);
            if (imageIndex > - 1) {
                await cloudinary.uploader.destroy(product.images.public_id);
                product.images.splice(imageIndex , 1)
            }
        }
    }
    if (newImages.length > 0 ) {
        const uploadResults = await uploadImages(newImages)
        if(uploadResults.status === 'error') {
            return uploadResults
        }
        product.images  = [...product.images , uploadResults]
    }
    product.name = updateData.name || product.name;
    product.price = updateData.price || product.price;
    product.title = updateData.title || product.title;
    product.categoryid = updateData.categoryid || product.categoryid;
    product.categoryName = updateData.categoryName || product.categoryName;
    product.Stock = updateData.Stock || product.Stock;
    product.CPU = updateData.CPU || product.CPU;
    product.CPUDETAIL = updateData.CPUDETAIL || product.CPUDETAIL;
    product.RAMDETAIL = updateData.RAMDETAIL || product.RAMDETAIL;
    product.RAM = updateData.RAM || product.RAM;
    product.GC = updateData.GC || product.GC;
    product.Screen = updateData.Screen || product.Screen;
    product.Port = updateData.Port || product.Port;
    product.Keyboard = updateData.Keyboard || product.Keyboard;
    product.Audio = updateData.Audio || product.Audio;
    product.Lan = updateData.Lan || product.Lan;
    product.Bluetooth = updateData.Bluetooth || product.Bluetooth;
    product.Webcam = updateData.Webcam || product.Webcam;
    product.OPS = updateData.OPS || product.OPS;
    product.Battery = updateData.Battery || product.Battery;
    product.Wifi = updateData.Wifi || product.Wifi;
    product.Weight = updateData.Weight || product.Weight;
    product.Size = updateData.Size || product.Size;
    product.LCD = updateData.LCD || product.LCD;
    product.VGA = updateData.VGA || product.VGA;
    product.SSD = updateData.SSD || product.SSD;
    product.Color = updateData.Color || product.Color;
    product.OS = updateData.OS || product.OS;
    product.HZ = updateData.HZ || product.HZ;
    
    await product.save();
    return {
        status: 'success',
        message: 'Cập nhật sản phẩm thành công',
        product
    }
    }
    catch (error) {
        return {
            status: 'success',
            message : 'Xóa sản phẩm thành công'

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

module.exports = {
    createProduct,
    getAllProducts,
    deleteProduct,
    uploadImages,
    updateProduct

};
