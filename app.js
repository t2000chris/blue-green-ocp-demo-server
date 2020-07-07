'use strict';

const express = require('express');
const config = require('./config/config');
const app = new express();

app.get('/', (req, res) => res.send('Do not browse root!!'));
require('./routes/versionRoutes')(app, config);
require('./routes/getPiRoutes')(app, config);

app.listen(3000, () => console.log('Server up!'));
