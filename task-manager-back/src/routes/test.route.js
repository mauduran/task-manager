const express = require('express');
const TestController = require('../controllers/test.controller');

const router = express.Router();

router.route("/")
    .post(TestController.createTestAction)
    .get(TestController.getTestActions);

module.exports = router;