const User = require('../model/user.model');

exports.createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

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
