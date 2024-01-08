const mongoose = require('mongoose');

const OTPSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    OTP: {
        type: String,
        required: true
    },
    timer: {
        type: Date,
        required: true
    }
}, {
    timestamps: true
});

const OTP = mongoose.model('OTP', OTPSchema);

module.exports = OTP;
