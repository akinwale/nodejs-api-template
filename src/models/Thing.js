const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const thingSchema = new Schema({
    name: { type: String, required: true, unique: true },
    age: Number,
    location: String,
    is_awesome: Boolean,
    items: Array,
    created_at: Date,
    updated_at: Date,
});

const Thing = mongoose.model('Thing', thingSchema);

module.exports = Thing;