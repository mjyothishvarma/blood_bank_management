const express = require('express');
const router = express.Router();
const donorController = require('../controllers/donorController');  
const auth = require('../middleware/auth'); 


router.post('/register', auth.isLogout, donorController.registerDonor);  
router.post('/login', auth.isLogout, donorController.loginDonor);  
router.post('/logout', auth.isLogin, donorController.logoutDonor); 


router.get('/profile', auth.isLogin, donorController.getDonorProfile);  
router.post('/profile/update', auth.isLogin, donorController.updateDonorProfile);  
router.get('/available-slots', auth.isLogin, donorController.getAvailableTimeSlots);

router.post('/appointment', auth.isLogin, donorController.scheduleAppointment); 


module.exports = router;
