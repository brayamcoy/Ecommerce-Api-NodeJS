const router = require('express').Router();
const { login, register, verifyToken, forgotPassword, resetPassword } = require('../controllers/auth');

router.post('/login', login);
router.post('/register', register);
router.get('/verify-token', verifyToken);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);

module.exports = router;