const express = require('express');
const Controller = require('../../controller/index');
const router = express.Router();

router.post('/reminders',Controller.create);

module.exports = router;