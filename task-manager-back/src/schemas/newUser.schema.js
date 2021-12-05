const yup = require("yup");

let newUserSchema = yup.object().shape({
    name: yup.string().required().trim(),
    username: yup.string().required(),
    password: yup.string().required(),
}).noUnknown();

module.exports = newUserSchema;