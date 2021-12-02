const mongoose = require('mongoose');
const taskConstants = require('../constants/task.constants');

let TaskSchema = mongoose.Schema({
    user: {
        type: String, 
        type: mongoose.Schema.Types.ObjectId,
    },
    title: {
        type: String,
        require: true,
    },
    description: {
        type:String,
        require: true,
    },
    status: {
        type: String,
        require: true,
        enum: Object.values(taskConstants.STATUS_TYPES),
    },
    dateOfDelivery: {
        type: Date,
        require: true,
    },
    comments: {
        type: [String],
        default: [],
    },
    responsiblePerson: {
        type: String,
        default: '',
    },
    tags: {
        type: [String],
        default: [],
    }
})

let Task = mongoose.model("task", TaskSchema);

module.exports = Task;
