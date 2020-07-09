'use strict';

var calcWorker = require('../workers/calculation')

const cpuLoadRoutes = (app, config) => {
	app.get('/api/cpu', (req, res) => {;
		if (Object.keys(req.query).length == 0){
			load = 0
		}
		else {
			var load = req.query.load;
		}
		// load starts from 45 should getting heavy
		calcWorker.fibo(load)
	    res.send("Finish calculating Fibonacci! With loading " + load);
    });
};

module.exports = cpuLoadRoutes;
