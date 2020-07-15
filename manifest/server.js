"use strict";

const express = require('express');
const winston = require('winston');
const async = require('async');
const nconf = require('nconf');
const path = require('path');
const app = express();
const middleware = require('./lib/middleware')(app);
const compression = require('compression');
const cacheTime = process.env.NODE_ENV === 'production' ? 86400000 : 0;

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

const zendesk = require('./lib/zendesk');

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
	var validPages = ['404', '502', 'dmca', 'index', 'press', 'pricing', 'privacy', 'tos', 'product', 'plans', 'gdpr'];

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

	// Naive filtering of Russian spambots
	const regex1 = /^(.*?):/;
	const match1 = req.body.message.match(regex1);
	const match2 = req.body.title.match(regex1);
	if (req.body.email.indexOf('@yandex.ru') !== -1 && /\.ru\//.test(req.body.message)) {
		return res.sendStatus(200); // OK, ya rascals!
	} else if (/:\shttps?:\/\/.*\s\.$/.test(req.body.message)) {	// nodebb/misty#7
		return res.sendStatus(200);
	} else if (match1 && req.body.name === match1[1]) {	// if beginning of text followed by colon matches name: 🗑
		return res.sendStatus(200);
	} else if (match2 && match1[0] === match2[0]) {	// if beginning of text with colon matches name w/ colon: 🗑
		return res.sendStatus(200);
	}

	if (!ok) {
		return res.sendStatus(400);
	}

	var mailbox = req.body.type === 'support' ? 360003654833 : 360003659214;
	var type;

	if (req.body.type === 'support') {
		type = 'Technical Support';
	} else if (req.body.type === 'sales') {
		type = 'NodeBB Hosting';
	} else if (req.body.type === 'custom') {
		type = 'Custom Development / Enterprise';
	} else {
		type = 'Other';
	}

	zendesk.create({
		subject: (req.body.type === 'support' ? 'Support Request: ' : 'NodeBB Contact: ') + req.body.email,
		comment: {
			html_body: '<strong>Request type: ' + type + '</strong><br /><br />' + req.body.message,
		},
		requester: {
			name: req.body.name,
			email: req.body.email,
		},
		group_id: mailbox,
	}, function (err, response, body) {
		if (err) {
			res.sendStatus(400);
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
