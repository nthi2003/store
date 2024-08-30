const productService = require('../service/productService');

const createProduct = async (req, res) => {
    try {
        const { name, price, title, categoryid, categoryName, Stock, CPU, CPUDETAIL, RAMDETAIL,
                RAM, GC, Screen, Port, Keyboard, Audio, Lan, Bluetooth, Webcam, OPS, Battery,
                Wifi, Weight, Size, LCD, VGA, SSD, Color, OS, HZ } = req.body;
        const images = req.files;

        if (!images || images.length === 0) {
            return res.status(400).json({
                status: 'error',
                message: 'Không tìm thấy tệp'
            });
        }

        await productService.uploadImages(images);

        if (!categoryid) {
            return res.status(400).json({
                status: 'error',
                message: 'CategoryID không tồn tại'
            });
        }

        const product = await productService.createProduct({
            name, price, title, categoryid, categoryName, Stock, CPU, CPUDETAIL, RAMDETAIL,
            RAM, GC, Screen, Port, Keyboard, Audio, Lan, Bluetooth, Webcam, OPS, Battery,
            Wifi, Weight, Size, LCD, VGA, SSD, Color, OS, HZ, images
        });

        return res.status(200).json(product);
    } catch (error) {

        return res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const page = parseInt(req.params.page) || 1;
        const limit = parseInt(req.query.limit) || 2;
        const response = await productService.getAllProducts(page, limit);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({
            status: 'error',
            message: e.message
        });
    }
};
const getProductDetails = async (req, res) => {
    try {
        const {id} = req.params
        
            const response = await productService.getProductDetails(id);
            return res.status(200).json(response);
        
        
    }catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
}
const deleteProduct = async (req, res) => {
    const {id} = req.params;

    try {
        const response = await productService.deleteProduct(id);
        return res.status(200).json(response);
    }
    catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        })
    }
}
const updateProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            name, price, title, categoryid, categoryName, Stock, CPU, CPUDETAIL, RAMDETAIL,
            RAM, GC, Screen, Port, Keyboard, Audio, Lan, Bluetooth, Webcam, Battery,
            Wifi, Weight, Size, LCD, VGA, SSD, Color, OS, HZ
        } = req.body;
        const images = req.files;

        if (!categoryid) {
            return res.status(400).json({
                status: 'error',
                message: 'CategoryID không tồn tại'
            });
        }

        const product = await productService.getAllProducts(id);
        if (!product) {
            return res.status(404).json({
                status: 'error',
                message: 'Sản phẩm không tồn tại'
            });
        }

        let imageUrls = product.images; 
        if (images && images.length > 0) {
            const uploadResults = await productService.uploadImages(images);
            if (uploadResults.status === 'error') {
                return res.status(400).json(uploadResults);
            }
            imageUrls = uploadResults; 
        }

        const updatedProduct = await productService.updateProduct(id, {
            name, price, title, categoryid, categoryName, Stock, CPU, CPUDETAIL, RAMDETAIL,
            RAM, GC, Screen, Port, Keyboard, Audio, Lan, Bluetooth, Webcam, Battery,
            Wifi, Weight, Size, LCD, VGA, SSD, Color, OS, HZ, images: imageUrls
        });

        return res.status(200).json(updatedProduct);
    } catch (error) {
        console.error('Lỗi khi cập nhật sản phẩm:', error);
        return res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};
const deleteImageProduct = async (req, res) => {
    const { id, imageId  } = req.params;

    try {
        const response = await productService.deleteImageProduct(id, imageId);
        console.log(imageId)
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
}

module.exports = {
    createProduct,
    getAllProducts,
    deleteProduct,
    updateProduct,
    getProductDetails,
    deleteImageProduct
};
