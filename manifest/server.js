"use strict";

var express = require('express'),
	winston = require('winston'),
	async = require('async'),
	nconf = require('nconf'),
	path = require('path'),
	app = express(),
	middleware = require('./lib/middleware')(app),
	compression = require('compression'),

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

app.use(compression());
app.use(express.static('public', {
	maxAge: 86400000
}));

app.use(middleware.processRender);

app.get('/:page?/:subpage?', middleware.buildPage, function (req, res) {
	var page = path.join(req.params.page || 'index', req.params.subpage || '');
	
	res.render(page, {});
});

app.use(function (req, res, next) {
	res.setHeader('X-Powered-By', 'NodeBB');
	res.setHeader("Cache-Control", "max-age=86400000");
});

var server = app.listen(nconf.get('port') || 3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	winston.info('Manifest is ready and listening on http://%s:%s', host, port);
});



process.on('SIGTERM', function() {
	process.exit();
});