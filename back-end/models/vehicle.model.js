//imports
const mongoose = require('mongoose');

//set schema
const VehicleSchema = new mongoose.Schema({
    code: { type: String, required: true, trim: true }, 
    model: { type: String, required: true, trim: true },
    type: { type: String, required: true, trim: true }, 
    name: { type: String, required: true, trim: true }, 
    chargePerKm: { type: Number, required: true, trim: true }, 
    categories: [{ type: mongoose.Schema.Types.ObjectId, required: false, ref: 'categories' }]
});

//define object
const Vehicles = mongoose.model('vehicles', VehicleSchema);

//exports
module.exports = Vehicles;