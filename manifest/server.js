"use strict";

var express = require('express'),
	winston = require('winston'),
	async = require('async'),
	nconf = require('nconf'),
	path = require('path'),
	app = express(),
	middleware = require('./lib/middleware')(app),
	compression = require('compression'),
	cacheTime = process.env.NODE_ENV === 'production' ? 86400000 : 0;

var bodyParser = require('body-parser');
var request = require('request');

var filecache = {};

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

app.use(bodyParser.urlencoded({ extended: true }));

app.use(middleware.processRender);

app.get('/503', function(req, res) {
	res.statusCode = 503;
	res.locals.header = '';
	res.locals.footer = '';
	res.render('503', {});
});

app.get('/:page?/:subpage?', middleware.buildPage, function (req, res) {
	var validPages = ['404', '502', 'dmca', 'index', 'press', 'pricing', 'privacy', 'tos', 'product', 'plans'];

	if (!req.params.page || validPages.indexOf(req.params.page) !== -1) {
		if (req.params.page === 'product' && !req.params.subpage) {
			return res.render('404', {});
		} else if (req.params.page === '502') {
			res.statusCode = 502;
		}

		res.render(res.page, res.data);
	} else {
		res.statusCode = 404;
		res.render('404', {});
	}
});

app.post('/contact', function (req, res) {
	var required = ['type', 'message', 'email', 'name'];
	var ok = required.every(function (prop) {
		return req.body.hasOwnProperty(prop);
	});

	if (!ok) {
		return res.sendStatus(400);
	}

	var mailbox = req.body.type === 'support' ? 2911339330 : 2915337130;

	request.post({
		url: 'https://api.groovehq.com/v1/tickets',
		json: true,
		body: {
			body: req.body.message,
			from: {
				email: req.body.email,
				name: req.body.name,
			},
			to: {
				name: 'NodeBB',
				email: 'support@nodebb.org',
			},
			tags: ['contact-form', req.body.type],
			subject: 'Customer Inquiry via Website',
			mailbox: mailbox + '',
		},
		auth: {
			bearer: 'eb48aaf5776c764d9e6ed4507f6853cc858a1d33dc6a79d74956e05e98a7f6dc',
		},
	}, function (err, response, body) {
		if (err) {
			res.sendStatus(400);
		} else if (response.statusCode !== 201) {
			res.sendStatus(response.statusCode);
		} else {
			res.sendStatus(200);
		}
	});
});


var server = app.listen(nconf.get('port') || 3000, function() {
	var host = server.address().address;
	var port = server.address().port;

	winston.info('Manifest is ready and listening on http://%s:%s', host, port);
});



process.on('SIGTERM', function() {
	process.exit();
});
