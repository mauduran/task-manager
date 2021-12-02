const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerDocs = require('./config/swagger.config');
const port = process.env.PORT || 3001;
const morgan = require('morgan');
const Routes = require('./src/routes/routes');
const db = require('./config/db-connection');

const app = express();

if (process.env.NODE_ENV == 'dev') {
    dotenv.config();
}

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

for (const [path, value] of Object.entries(Routes)) {
    app.use(`/api/${path}`, value);
}

app.use('/api/docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.get('/', (req, res) => {
    res.json("All good");
})

app.listen(port, () => {
    console.log("Server running on PORT " + port);
})