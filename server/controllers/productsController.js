const productService = require('../service/productService');

const createProduct = async (req, res) => {
    try {
        const { name, price, categoryid, title, categoryName , CPU, CPUDETAIL, RAMDETAIL, Stock , RAM, GC, Screen, Port, Keyboard, Audio, Lan, Bluetooth, Webcam, OPS, Battery, Wifi, Weight, Size, LCD, VGA, SSD, Color, OS, HZ } = req.body;
        const file = req.files?.image;

        if (!file) {
            return res.status(400).json({
                status: 'error',
                message: 'Không tìm thấy file'
            });
        }

        const response = await productService.createProduct({
            name,
            price,
            image: file.tempFilePath ,
            categoryid,
            categoryName,
            title,
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

        return res.status(200).json(response);
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

module.exports = {
    createProduct,
    getAllProducts,
    deleteProduct
};
