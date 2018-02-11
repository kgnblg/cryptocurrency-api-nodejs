const express = require('express');
const router = express.Router();

let ctrlCurr = require('../controller/currencyController');
router.post('/', ctrlCurr.index);

module.exports = router;