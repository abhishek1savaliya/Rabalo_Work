const express = require('express');
const userController = require('../controller/user.controller');

const router = express.Router();

router.post('/otpsend', userController.otpSend);
router.post('/verifyotp', userController.verifyOtp);
router.get('/users', userController.listUser);

module.exports = router;
