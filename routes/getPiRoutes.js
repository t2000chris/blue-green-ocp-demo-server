'use strict';

var calcWorker = require('../workers/calculation')

const getVersionRoutes = (app, config) => {
	app.get('/api/fibo', (req, res) => {;
		// calcWorker.getPi()
		calcWorker.fibo(45)
	    res.send("Finish calculating Fibonacci!");
    });
};

module.exports = getVersionRoutes;
