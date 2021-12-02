const newTaskSchema = require('../schemas/newTask.schema');

async function validateNewTask(req, res, next) {
    try {
         req.body = await newTaskSchema.validate(req.body);
         next();
    } catch (err) {
        console.error(err);
        res.status(400).send(err.message);
    }
}

module.exports = validateNewTask;