'use strict';

const express = require('express');
const config = require('./config/config');
const swaggerUi = require('swagger-ui-express'), swaggerDocument = require('./swagger.json');
const app = new express();

app.get('/', (req, res) => res.send('Do not browse root!!'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
require('./routes/versionRoutes')(app, config);
require('./routes/cpuLoadRoutes')(app, config);

app.listen(8080, () => console.log('Server up!'));
