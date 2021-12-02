const express = require('express');
const UserController = require('../controllers/user.controller');
const validateNewUser = require('../middlewares/validateNewUser.middleware');

const router = express.Router();

router.route("/")
    .post(validateNewUser, UserController.createUser)

router.route("/login")
    .get(UserController.login);

module.exports = router;