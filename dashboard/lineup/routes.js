const express = require('express');
const router = express.Router();

const lineupController = require('./controller');

router.get('/:id', lineupController.lineupGetter);





module.exports = router;