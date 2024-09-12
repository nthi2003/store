const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PosterSchema = new Schema({
    posterHeader: [{
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
    posterSlick: [{
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
    postesLeftSlick: [{
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
    posterBottomSlick: [{
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
    posterBottom: [{
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
    posterLeftRight: [{
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
});

module.exports = mongoose.model('Poster', PosterSchema);
