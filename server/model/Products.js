const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    image: {
        public_id: { type: String, required: true },
        url: { type: String, required: true }
    },
    price: { type: String, required: true },
    CPU: { type: String, required: false },
    CPUDETAIL: { type: String, required: false },
    RAMDETAIL: { type: String, required: false },
    GC: { type: String, required: false },
    Screen: { type: String, required: false },
    Port: { type: String, required: false },
    Keyboard: { type: String, required: false },
    Audio: { type: String, required: false },
    Lan: { type: String, required: false },
    Bluetooth: { type: String, required: false },
    Webcam: { type: String, required: false },
    OPS: { type: String, required: false },
    Battery: { type: String, required: false },
    Weight: { type: String, required: false },
    Size: { type: String, required: false },
    LCD: { type: String, required: false },
    HZ: { type: String, required: false },
    VGA: { type: String, required: false },
    SSD: { type: String, required: false },
    categoryid: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', ProductSchema);
