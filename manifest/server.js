"use strict";

var express = require('express'),
	winston = require('winston'),
	async = require('async'),
	app = express(),
	filecache = {};

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
	colorize: true
});

app.use(express.static('public', {}));

app.get('/:page?', function (req, res) {
	renderPage(req.params.page || 'index', function(err, page) {
		if (err) {
			return res.status(404);
		}

		res.send(filecache['header'] + page + filecache['footer']);
	});
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	async.each(['header', 'footer'], renderPage, function() {
		winston.info('Manifest is ready and listening on http://%s:%s', host, port);
	});
});



function renderPage(page, callback) {
	if (filecache[page]) {
		return callback(false, filecache[page]);
	}

	var fs = require('fs'),
		path = require('path');

	fs.readFile(path.join(__dirname, 'templates', page + '.html'), function(err, file) {
		if (err || !file) {
			return callback(true);
		}

		file = file.toString();
		filecache[page] = file;
		
		return callback(false, file);
	});
}