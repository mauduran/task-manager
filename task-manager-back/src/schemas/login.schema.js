const yup = require("yup");

let newUserSchema = yup.object().shape({
    username: yup.string().required(),
    password: yup.string().required(),
}).noUnknown();

module.exports = newUserSchema;