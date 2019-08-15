'use strict';

const nconf = require('nconf');
const zendesk = require('node-zendesk');
const client = zendesk.createClient({
	username: nconf.get('zendesk:email'),
	token: nconf.get('zendesk:api'),
	remoteUri: 'https://nodebb.zendesk.com/api/v2',
	disableGlobalState: true,
});

const Zendesk = module.exports;

Zendesk.create = function (payload, cb) {
	client.tickets.create({
		ticket: payload,
	}, cb);
};
