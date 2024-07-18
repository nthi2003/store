    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    const categorySchema = new Schema({
        name: { type: String, required: true },
        image: {
            public_id : {
                type: String,
                required: true
            },
            url : {
                type: String,
                required: true
            }
        },
        createdAt: { type: Date, default: Date.now }
    });

    module.exports = mongoose.model('Category', categorySchema);
