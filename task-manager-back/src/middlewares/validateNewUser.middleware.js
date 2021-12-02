const newUserSchema = require('../schemas/newUser.schema');

async function validateNewUser(req, res, next) {
    try {
         req.body = await newUserSchema.validate(req.body);
         next();
    } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
    }
}

module.exports = validateNewUser;