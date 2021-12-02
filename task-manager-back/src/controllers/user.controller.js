const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserSchema = require("../models/user.model");

class UserController {
    createUser = async (req, res) => {
        let {
            name,
            username,
            password,
        } = req.body;

        let hash = bcrypt.hashSync(password, 10);

        let newUser = {
            name,
            hash,
            username,
        }

        try {
            let newUserDoc = UserSchema(newUser);
            await newUserDoc.save();
            return res.status(201).json({
                success: true,
                message: "User created",
            });
        } catch (error) {
            if (error.code === 11000) {
                return res.status(409).json({
                    success: false,
                    message: "User already exists!",
                });
            }
            return res.status(400).json({
                success: false,
                message: "Unable to create user",
            });
        }

    }

    login = async (req, res) => {
        let {
            username,
            password
        } = req.body;

        try {
            const userDoc = await UserSchema.findOne({ username });

            if (!userDoc) {
                throw new Error("User does not exist");
            }

            console.log(userDoc);

            const validCredentials = bcrypt.compareSync(password, userDoc.hash);

            if (!validCredentials) {
                return res.status(400).json({
                    success: false,
                    message: "Invalid credentials"
                });
            }

            const token = jwt.sign({
                userId: userDoc._id,
                username,
            }, process.env.TOKEN_SECRET);

            res.json({ success: true, token });
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                error: "Unable to login",
            })
        }
    }

    getUsers = async (req, res) => {
        try {
            let users = await UserSchema.find();
            res.status(200).json({
                success: true,
                users: users.map(user => ({ name: user.name, username: user.username })),
            })
        } catch (error) {
            res.status(400).json({
                success: false,
                error: "Unable to get users",
            })
        }
    }
}

module.exports = new UserController();