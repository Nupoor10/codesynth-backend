const mongoose = require('mongoose');
const Code = require('./codeModel');

const noteSchema = new mongoose.Schema({
    title : {
        type: String,
    },
    content : {
        type : String,
    },
    images : {
        type : String
    },
    code : {
        type : mongoose.Types.ObjectId,
        ref : Code,
        required : true
    }
}, {timestamps: true})

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
