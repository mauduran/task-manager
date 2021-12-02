const TaskSchema = require("../models/task.model");

class TasksController {
    createTask = async (req, res) => {
        res.status(500).json("Not Implemented Error");
    }

    getTasks = async (req, res) => {
        res.status(500).json("Not Implemented Error");
    }

    getTaskById = async (req, res) => {
        res.status(500).json("Not Implemented Error");
    }

    updateTask = async (req, res) => {
        res.status(500).json("Not Implemented Error");
    }

    deleteTask = async (req, res) => {
        res.status(500).json("Not Implemented Error");
    }
}

module.exports = new TasksController();