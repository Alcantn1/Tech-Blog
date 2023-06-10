const router = require('express').Router();
const authController = require('../controllers/authController');

// User signup
router.post('/signup', authController.signup);

// User login
router.post('/login', authController.login);

// User logout
router.post('/logout', authController.logout);

module.exports = router;
