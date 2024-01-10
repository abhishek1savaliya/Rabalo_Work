const mongoose = require('mongoose');

const OTPSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    otp: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const OTP = mongoose.model('OTP', OTPSchema);

module.exports = OTP;
