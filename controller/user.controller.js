const User = require('../model/user.model');
const { sendOTP, verifyOTP } = require('../services/message');
const OTP = require('../model/otp.model');
const { sendMail } = require('../services/mail');

exports.createUser = async (req, res) => {
    try {

        const newUser = new User(req.body);
        const savedUser = await newUser.save();

        res.status(200).json({
            message: "success",
            data: savedUser
        })

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

exports.otpSend = async (req, res) => {
    try {

        const user = await getUserPhone(req.body.id)

        const otpRequest = await sendOTP(user.phone)

        res.status(201).json(otpRequest);

    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.verifyOtp = async (req, res) => {
    try {

        const { id, otp } = req.body

        const user = await getUserPhone(id)

        const verifyOtp = await verifyOTP(user.phone, otp)

        if (verifyOtp) {
            const newOtp = new OTP({
                user: id,
                otp: otp,
            })
            const savedOtp = await newOtp.save()
            res.status(200).json({
                message: true,
                otpData: savedOtp
            })
        }
        else {
            res.status(400).json({ message: "error" });
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

exports.mail = async (req, res) => {
    try {
        const messageId = await sendMail(req.body.mail);
        res.json({ success: true, messageId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
const getUserPhone = async (id) => {
    return await User.findById(id).select('-_id phone')
}