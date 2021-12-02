const loginSchema = require('../schemas/login.schema');

async function validateLoginBody(req, res, next) {
    try {
         req.body = await loginSchema.validate(req.body);
         next();
    } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
    }
}

module.exports = validateLoginBody;