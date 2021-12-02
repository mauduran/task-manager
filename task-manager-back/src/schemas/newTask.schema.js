const yup = require("yup");

let newTaskSchema = yup.object().shape({
    user: yup.string().trim().required().max(64),
    title: yup.string().trim().required().max(128),
    description: yup.string().trim().max(512),
    dateOfDelivery: yup.date().required(),
    comments: yup.array().of(yup.string().trim().max(255)),
    responsiblePerson: yup.string().max(64),
    tags: yup.array().of(yup.string().max(32))
});

module.exports = newTaskSchema;