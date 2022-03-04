const express = require('express');
const router = express.Router();
const gameController = require('./controller');


router.get('/game', gameController.generateRoundMatches);



module.exports = router;