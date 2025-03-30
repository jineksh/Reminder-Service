const express = require('express');
const V1routes = require('./v1/index');
const router = express.Router();

router.use('/v1',V1routes);

module.exports = router;