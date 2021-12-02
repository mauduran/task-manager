const yup = require("yup");

let newUserSchema = yup.object().shape({
    name: yup.string().required().trim(),
    username: yup.string().required().min(5),
    password: yup.string().required().min(5).max(64),
});

module.exports = newUserSchema;