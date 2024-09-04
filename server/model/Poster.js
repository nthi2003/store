const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PosterSchema = new Schema({
    porterHeader: [{
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
    porterSlick: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    LinkPorterSlick: [{
        type: String,
        required: true
    }],
    porterLeftSlick: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    LinkPorterLeftSlick: [{
        type: String,
        required: true
    }],
    porterBottomSlick: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    LinkPorterBottomSlick: [{
        type: String,
        required: true
    }],
    porterBottom: [{
        public_id: {
            type: String,
            required: true
        },
        url: {
            type: String,
            required: true
        }
    }],
    LinkPorterBottom: [{
        type: String,
        required: true
    }]
});

module.exports = mongoose.model('Poster', PosterSchema);
