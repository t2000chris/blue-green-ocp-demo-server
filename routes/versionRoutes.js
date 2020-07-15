'use strict';

const getVersionRoutes = (app, config) => {
    app.get('/api/version', (req, res) => {
	    res.send(config.version);
	    // var num = Math.floor(Math.random() * 2) + 1;
	    // res.send(num.toString());
    });
};

module.exports = getVersionRoutes;
