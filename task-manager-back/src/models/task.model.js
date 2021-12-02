const mongoose = require('mongoose');

let TaskSchema = mongoose.Schema({
    user: {
        type: String, 
        // type: mongoose.Schema.Types.ObjectId,
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
