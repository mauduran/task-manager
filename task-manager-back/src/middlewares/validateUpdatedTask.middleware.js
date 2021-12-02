const newUpdatedTask = require('../schemas/updatedTask.schema');

async function validateUpdatedTask(req, res, next) {
    try {
         req.body = await newUpdatedTask.validate(req.body);
         next();
    } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
    }
}

module.exports = validateUpdatedTask;