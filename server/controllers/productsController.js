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
        console.error('Lỗi khi tạo sản phẩm:', error);
        return res.status(500).json({
            status: 'error',
            message: error.message
        });
    }
};

const getAllProducts = async (req, res) => {
    try {
        const page = parseInt(req.params.page) || 1;
        const limit = parseInt(req.query.limit) || 5;
        const response = await productService.getAllProducts(page, limit);
        return res.status(200).json(response);
    } catch (e) {
        return res.status(500).json({
            status: 'error',
            message: e.message
        });
    }
};
const deleteProduct = async (req, res) => {
    const {id} = req.params

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
        const {id} = req.params
    const updateData = req.body
    console.log("req.files:", req.files);

    const newImages =  req.files ?  req.files.map(file => file.path) : [];
    console.log("newImages:", newImages);
    const {imagesToDelete } = req.body;
    const  response = await productService.updateProduct(id, updateData, newImages, imagesToDelete);
    return res.status(200).json(response);

    } catch (error) {
        return res.status(500).json({
            status: 'error',
            message: error.message
        })
    }

}

module.exports = {
    createProduct,
    getAllProducts,
    deleteProduct,
    updateProduct
};
