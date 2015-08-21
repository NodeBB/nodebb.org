"use strict";

var middleware = {},
	async = require('async'),
	nconf = require('nconf'),
	path = require('path'),
	constants = require('../data.json'),
	app;

var originalPages = ['dmca', 'press', 'privacy', 'tos'];

middleware.buildPage = function(req, res, next) { 
	res.page = path.join(req.params.page || 'index', req.params.subpage || '');

	var data = {
		'base_path': nconf.get('base_path'),
		'dev': nconf.get('production') ? false : true,
		'path': 'page-' + (req.url.slice(1).replace(/\//g, '-') || 'index'),
		'title': constants.titles[res.page] || constants.titles.default,
		'loadOriginalCSS': originalPages.indexOf(res.page) !== - 1
	};

	async.each(['header', 'footer'], function(tpl, next) {
		app.render(tpl, data, function(err, html) {
			res.locals[tpl] = html;
			next(err);
		});
	}, function(err) {
		next(err);
	});
};

middleware.processRender = function(req, res, next) {
	// res.render post-processing, modified from here: https://gist.github.com/mrlannigan/5051687
	var render = res.render;
	res.render = function(view, options, fn) {
		var self = this,
		options = options || {},
		req = this.req,
		app = req.app,
		defaultFn;

		if ('function' == typeof options) {
			fn = options, options = {};
		}

		defaultFn = function(err, str){
			if (err) return req.next(err);
			self.send(str);
		};

		if ('function' != typeof fn) {
			fn = defaultFn;
		}

		render.call(self, view, options, function(err, str) {
			fn(err, res.locals.header + str + res.locals.footer);
		});
	};

	next();
};

module.exports = function(webserver) {
	app = webserver;
	return middleware;
};