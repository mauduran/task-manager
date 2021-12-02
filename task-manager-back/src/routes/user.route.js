const express = require('express');
const UserController = require('../controllers/user.controller');
const validateNewUser = require('../middlewares/validateNewUser.middleware');
const validateLoginBody = require('../middlewares/validateLoginBody.middleware');

const router = express.Router();

router.route("/")
    .post(validateNewUser, UserController.createUser)
    .get(UserController.getUsers);

router.route("/login")
    .post(validateLoginBody, UserController.login);

module.exports = router;