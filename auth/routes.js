const express = require('express');
const authController = require('./controller');
const router = express.Router();

router.get('/login/:email/:password', authController.singIn); 
router.get('/signup/teams', authController.getTeams);
router.post('/signup', authController.singUp);
router.post('/signup/team/select', authController.selectTeam);



module.exports = router;
