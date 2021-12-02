const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: "Nextline Task Management Tool",
            version: '1.0.0',
            description: "REST API for task manager app.",
        },
        servers: [
            {
                "url":"http://localhost:3001",
                "description":"Development Server"
            },
        ],
    },
    apis: ["index.js", "./src/routes/*.route.js"]
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;