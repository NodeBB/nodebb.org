"use strict";

var express = require('express'),
	winston = require('winston'),
	app = express();

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
	colorize: true
});

app.use(express.static('public', {}));

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	winston.info('Manifest is ready and listening on http://%s:%s', host, port);
});