const TaskSchema = require("../models/task.model");
const { STATUS_TYPES } = require("../constants/task.constants")

class TasksController {
    createTask = async (req, res) => {
        let newTask = {
            ...req.body,
            status: STATUS_TYPES.PENDING,
            user: req._userId,
        }

        try {
            let newTaskDoc = TaskSchema(newTask);
            await newTaskDoc.save();
            return res.status(201).json({
                success: true,
                message: "Task created",
            });
        } catch (error) {
            return res.status(400).json({
                success: false,
                message: "Unable to create task",
            });
        }
    }

    getTasks = async (req, res) => {
        try {
            let tasks = await TaskSchema.find({ user: req._userId });
            tasks = tasks.map(task => ({
                id: task._id,
                title: task.title,
                description: task.description,
                tags: task.tags,
                status: task.status,
            }));

            return res.status(200).json({
                success: true,
                tasks,
            });
        } catch (error) {
            console.log(error);
            res.status(400).json({
                success: false,
                message: "Unable to fetch tasks",
            });
        }
    }

    getTaskById = async (req, res) => {
        const { id } = req.params;
        if (!id) return res.status(400).json({ success: false, message: "missing params" });

        try {
            const task = await TaskSchema.findById(id);

            if (!task) throw new Error("Task does not exist");

            return res.status(200).json({
                success: true,
                task: task,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Unable to get task",
            });
        }
    }

    updateTask = async (req, res) => {
        const { id } = req.params;

        if (!id) return res.status(400).json({ success: false, message: "missing params" });

        try {
            const task = await TaskSchema.findByIdAndUpdate(id, req.body);

            if (!task) throw new Error("Task does not exist");

            return res.status(200).json({
                success: true,
                message: "Task updated",
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Unable to update task",
            });
        }
    }

    deleteTask = async (req, res) => {
        const { id } = req.params;
        if (!id) return res.status(400).json({ success: false, message: "missing params" });

        try {
            await TaskSchema.findByIdAndDelete(id);
            return res.status(200).json({
                success: true,
                message: "Task deleted",
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                message: "Unable to delete task",
            });
        }
    }
}

module.exports = new TasksController();