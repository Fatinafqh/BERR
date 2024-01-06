// visitor_pass_schema.js
const mongoose = require('mongoose');

const visitorPassSchema = new mongoose.Schema({
    visitor_id: { type: mongoose.Schema.Types.ObjectId, required: true },
    purpose_of_visit: { type: String, required: true },
    host_name: { type: String, required: true },
    host_address: { type: String, required: true },
    remarks: { type: String }
});

const VisitorPass = mongoose.model('VisitorPass', visitorPassSchema);
module.exports = VisitorPass;
