const Product = require('../model/Products');
const Category = require('../model/Category');
const cloudinary = require('../utils/cloudinary');

const createProduct = async ({ name, price, image, categoryid, categoryName, Stock, CPU, CPUDETAIL, RAMDETAIL, RAM, GC, Screen, Port, Keyboard, Audio, Lan, Bluetooth, Webcam, OPS, Battery, Wifi, Weight, Size, LCD, VGA, SSD, Color, OS, HZ }) => {
    try {
        const result = await cloudinary.uploader.upload(image, {
            folder: 'products',
        });

        if (!categoryid) {
            return {
                status: 'error',
                message: 'CategoryID không tồn tại'
            };
        }

        const category = await Category.findById(categoryid);
        if (!category) {
            return {
                status: 'error',
                message: 'Không tìm thấy doanh mục'
            };
        }

        const checkProduct = await Product.findOne({ name });
        if (checkProduct) {
            return {
                status: 'error',
                message: 'Sản phẩm đã tồn tại'
            };
        }

        const product = await Product.create({
            name,
            price,
            image: {
                public_id: result.public_id,
                url: result.secure_url
            },
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

        return {
            status: 'success',
            message: 'Sản phẩm đã được tạo thành công',
            product

          
        };
    } catch (error) {
        return {
            status: 'error',
            message: error.message,
        };
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

module.exports = {
    createProduct,
    getAllProducts
};
