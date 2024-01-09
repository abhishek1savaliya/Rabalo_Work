const User = require('../model/user.model');
const { sendOTP, verifyOTP } = require('../services/message');
const OTP = require('../model/otp.model');

exports.otpSend = async (req, res) => {
    try {
        const { phone } = req.body;

        const otpRequest = await sendOTP(phone)

        res.status(201).json(otpRequest);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.verifyOtp = async (req, res) => {
    try {

        const { otp, phone } = req.body

        const verifyOtp = await verifyOTP(phone, otp)

        if (verifyOtp) {
            const newUser = new User(req.body);
            const savedUser = await newUser.save();

            const newOtp = new OTP({
                user: savedUser._id,
                otp: otp,
            })

            const savedOtp = await newOtp.save()
            res.status(200).json({
                message: true,
                data: savedUser,
                otpData: savedOtp
            })
        }

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.listUser = async (req, res) => {
    try {
        const userList = await User.find();
        res.status(201).json({
            message: true,
            data: userList
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
