const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//create schema

const ItemSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

    completed: {
        type: Boolean,
        default: false
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);