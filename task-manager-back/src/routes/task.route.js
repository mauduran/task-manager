const express = require('express');
const TaskController = require('../controllers/tasks.controller');
const validateNewTask = require('../middlewares/validateNewTask.middleware');
const router = express.Router();

router.route("/")
    .post(validateNewTask, TaskController.createTask)
    .get(TaskController.getTasks);

router.route("/:id")
    .get(TaskController.getTaskById)
    .put(TaskController.updateTask)
    .delete(TaskController.deleteTask);

module.exports = router;