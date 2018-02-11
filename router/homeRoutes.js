const express = require('express');
const router = express.Router();

let ctrlHome = require('../controller/homeController');
router.get('/', ctrlHome.index);

module.exports = router;