// visitor_schema.js
const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
    full_name: { type: String, required: true },
    phone_number: { type: String },
    email: { type: String },
    license_number: { type: String, required: true },
    user_id: { type: mongoose.Schema.Types.ObjectId, required: true } // Assuming a reference to the logged-in user
});

const Visitor = mongoose.model('Visitor', visitorSchema);
module.exports = Visitor;
