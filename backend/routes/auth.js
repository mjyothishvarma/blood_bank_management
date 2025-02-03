const express = require('express');
const { registerDonor, loginDonor } = require('../controllers/authController');
const router = express.Router();

router.post('/donor/register', registerDonor);
router.post('/donor/login', loginDonor);

module.exports = router;
