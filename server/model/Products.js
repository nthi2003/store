const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    images: [{ public_id: String, url: String }],
    categoryid: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
    categoryName: { type: String, required: true },
    CPU: { type: String },
    CPUDETAIL: { type: String },
    RAMDETAIL: { type: String },
    RAM: { type: String },
    Screen: { type: String },
    Keyboard: { type: String },
    Audio: { type: String },
    Lan: { type: String },
    Bluetooth: { type: String },
    Webcam: { type: String },
    Weight: { type: String },
    Size: { type: String },
    HZ: { type: String },
    VGA: { type: String },
    SSD: { type: String },
    Stock: { type: Number, required: true }
});

module.exports = mongoose.model('Product', ProductSchema);
