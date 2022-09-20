const express = require('express');
const getName = require("./controllers");

const router = express.Router();

router.get('/name', getName);

module.exports = router;