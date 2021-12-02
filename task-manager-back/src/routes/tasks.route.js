const express = require('express');
const TaskController = require('../controllers/tasks.controller');

const router = express.Router();

router.route("/")
    .post(TaskController.createTask)
    .get(TaskController.getTasks);

router.route("/:id")
    .get(TaskController.getTaskById)
    .put(TaskController.updateTask)
    .delete(TaskController.deleteTask);

module.exports = router;