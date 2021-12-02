const UserSchema = require("../models/user.model");

class UserController {
    createUser = async (req, res) => {
        res.status(500).json("Not Implemented Error");
    }
    login = async (req, res) => {
        res.status(500).json("Not Implemented Error");
    }
}

module.exports = new UserController();