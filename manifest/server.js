"use strict";

var express = require('express'),
	winston = require('winston'),
	async = require('async'),
	nconf = require('nconf'),
	path = require('path'),
	app = express(),
	middleware = require('./lib/middleware')(app),
	compression = require('compression'),
	cacheTime = process.env.NODE_ENV === 'production' ? 86400000 : 0,

	filecache = {};

winston.remove(winston.transports.Console);
winston.add(winston.transports.Console, {
	colorize: true
});

nconf.file({
	file: path.join(__dirname, '/config.json')
});

app.engine('tpl', require('templates.js').__express);
app.set('view engine', 'tpl');
app.set('views', 'templates');

app.use(function (req, res, next) {
	res.setHeader('X-Powered-By', 'NodeBB');
	res.setHeader("Cache-Control", "max-age=" + cacheTime);
	next();
});

app.use(compression());
app.use(express.static('public', {
	maxAge: cacheTime
}));

app.use(middleware.processRender);

app.get('/:page?/:subpage?', middleware.buildPage, function (req, res) {
	res.render(res.page, res.data);
});

var server = app.listen(nconf.get('port') || 3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	winston.info('Manifest is ready and listening on http://%s:%s', host, port);
});



process.on('SIGTERM', function() {
	process.exit();
});