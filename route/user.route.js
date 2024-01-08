const express = require('express');
const userController = require('../controller/user.controller');

const router = express.Router();

router.post('/create', userController.createUser);
router.post('/verifyotp', userController.verifyOtp);
router.get('/users', userController.listUser);

module.exports = router;
