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


app.engine('tpl', require('templates.js').__express);
app.set('view engine', 'tpl');
app.set('views', 'templates');


app.use(express.static('public', {}));

app.get('/:page?/:subpage?', function (req, res) {
	var page = require('path').join(req.params.page || 'index', req.params.subpage || '');
	
	res.render(page, {});
});

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	winston.info('Manifest is ready and listening on http://%s:%s', host, port);
});