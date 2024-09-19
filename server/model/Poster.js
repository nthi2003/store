const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PosterSchema = new Schema({
    headerFiles: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    LinkPosterHeader: [{
        type: String,
        required: true
    }],
    slickFiles: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    LinkPosterSlick: [{
        type: String,
        required: true
    }],
    leftSlickFiles: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    LinkPosterLeftSlick: [{
        type: String,
        required: true
    }],
    bottomSlickFiles: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    LinkPosterBottomSlick: [{
        type: String,
        required: true
    }],
    bottomFiles: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    LinkPosterBottom: [{
        type: String,
        required: true
    }],
    leftRightFiles: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    LinkPosterLeftRight: [{
        type: String,
        required: true
    }]
}, { timestamps: true });

module.exports = mongoose.model('Poster', PosterSchema);
