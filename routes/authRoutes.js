const router = require('express').Router();
const authController = require('../controllers/authController');
const { User } = require('../models/User');


// User signup
router.post('/signup', authController.signup);

// User login
router.post('/login', authController.login);

// User logout
router.post('/logout', authController.logout);

module.exports = router;
