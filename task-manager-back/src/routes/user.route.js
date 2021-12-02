const express = require('express');
const UserController = require('../controllers/user.controller');

const router = express.Router();

router.route("/")
    .post(UserController.createUser)

router.route("/login")
    .get(UserController.login);

module.exports = router;