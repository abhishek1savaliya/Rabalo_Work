const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    guardianMobileNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    pinCode: {
        type: String,
        required: true
    },
    referralCode: {
        type: String
    },
    school: {
        type: String
    },
    class: {
        type: String,
        enum: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] 
    },
    board: {
        type: String
    },
    subjects: [{
        type: String
    }]
}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
