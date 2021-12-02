const mongoose = require('mongoose');

let testSchema = mongoose.Schema({
    value: {
        type:String,
        required: true
    },
});

let Test = mongoose.model("test", testSchema);

module.exports = Test;