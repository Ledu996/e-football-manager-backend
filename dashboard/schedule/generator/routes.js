const express = require('express')
const genControllers = require('./controller')
const router = express.Router();


router.get('/', genControllers.generateRounds);

module.exports = router;

