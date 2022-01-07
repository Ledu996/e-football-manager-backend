const express = require('express');
const authController = require('./controllers')
const router = express.Router();



router.get('/singup/teams', authController.getA);
router.post('/singup', authController.singup)



module.exports = router;