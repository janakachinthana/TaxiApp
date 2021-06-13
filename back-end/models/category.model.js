//imports
const mongoose = require('mongoose');

//set schema
const CategorySchema = new mongoose.Schema({
    categoryName: { type: String, required: true, trim: true },
    vehicles: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'vehicles' }]
});

//define object
const Category = mongoose.model('categories', CategorySchema);

//exports
module.exports = Category;