const yup = require("yup");

let newTaskSchema = yup.object().shape({
    title: yup.string().trim().required().max(128),
    description: yup.string().trim().max(512),
    dateOfDelivery: yup.date().required(),
    comments: yup.array().of(yup.string().trim().max(255)),
    responsiblePerson: yup.string().max(64),
    tags: yup.array().of(yup.string().max(32))
}).noUnknown();

module.exports = newTaskSchema;