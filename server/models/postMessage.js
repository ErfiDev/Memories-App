const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const Message = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    file: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    _id: {
        type: String,
        default: uuidv4()
    }
});

module.exports = mongoose.model('postMessage' , Message);