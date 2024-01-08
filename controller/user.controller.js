const User = require('../model/user.model');
const { sendOTP, verifyOTP } = require('../services/message');

exports.createUser = async (req, res) => {
    try {
        const { phone } = req.body;

        const otpRequest = await sendOTP(phone)

        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.verifyOtp = async (req, res) => {
    try {

        const { otp } = req.body

        const verifyOtp = await verifyOTP('9426399568', otp)

        res.status(200).json({
            message: true
        })
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
