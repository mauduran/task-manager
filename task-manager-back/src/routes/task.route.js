const express = require('express');
const TaskController = require('../controllers/task.controller');
const validateNewTask = require('../middlewares/validateNewTask.middleware');
const validateUpdatedTask = require('../middlewares/validateUpdatedTask.middleware');
const authMiddleware = require('../middlewares/authentication.middleware');
const router = express.Router();

router.route("/")
    .post(authMiddleware, validateNewTask, TaskController.createTask)
    .get(authMiddleware, TaskController.getTasks);

router.route("/:id")
    .get(authMiddleware, TaskController.getTaskById)
    .put(authMiddleware, validateUpdatedTask, TaskController.updateTask)
    .delete(authMiddleware, TaskController.deleteTask);

module.exports = router;