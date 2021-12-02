const mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    username: {
        type:String,
        unique: true,
        required: true
    },
    hash:{
        type: String
    },
})

let User = mongoose.model("user", userSchema);

module.exports = User;