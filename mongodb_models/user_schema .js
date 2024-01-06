// user_schema.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, default: 'user' },
    login_status: { type: Boolean, default: false }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
