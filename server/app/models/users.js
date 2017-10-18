'use strict'
var express = require('express'),
  router = express.Router(),
  logger = require('../../config/logger');
module.exports = function (app, config) {
	app.use('/api', router);

	router.route('/users').get(function(req, res, next){
		logger.log('Get all users', 'verbose');

	});
};
