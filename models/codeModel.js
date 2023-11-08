const mongoose = require('mongoose');
const User = require("./userModel");

const codeSchema = new mongoose.Schema ({
    title : {
        type: String,
    },
    html: {
        type: String,
    },
    css: {
        type: String,
    },
    javascript: {
        type: String,
    },
    status: {
        type: String,
        default: 'public'
    },
    owner: {
        type: mongoose.Types.ObjectId,
        ref: User,
        required: true
    }
}, {
    timestamps: true
});

const Code = mongoose.model('Code', codeSchema);

module.exports = Code;