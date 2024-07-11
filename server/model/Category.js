const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name: {type: 'string', required: true},
    createdAt: { type: Date, default: Date.now },
})

module.exports = mongoose.model('Category', categorySchema);