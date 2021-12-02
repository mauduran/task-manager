const mongoose = require('mongoose');

let TaskSchema = mongoose.Schema({
    user: {
        type: String, 
        require: true,
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
    },
    dateOfDelivery: {
        type: Date,
        require: true,
    },
    comments: {
        type: String,
        default: '',
    },
    personResponsible: {
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
