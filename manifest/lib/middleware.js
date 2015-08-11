"use strict";

var middleware = {},
	async = require('async'),
	app;


middleware.buildPage = function(req, res, next) { 
	async.each(['header', 'footer'], function(tpl, next) {
		app.render(tpl, {}, function(err, html) {
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