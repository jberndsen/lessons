module.exports = function (gulp, $) {
    'use strict';

	var http = require('http');
    var connect = require('connect');
    var serveStatic = require('serve-static');
    var open = require('open');
	var config = require('../config');

	gulp.task('serve', ['build'], function () {
		var port = 9000, app;

		gulp.watch(config.paths.app, ['build']);

		// todo: serve 'config.paths.output' instead of '.', requires dep in build tasks
		app = connect().use(serveStatic('.'));
		http.createServer(app).listen(port, function () {
			open('http://localhost:' + port);
		});
	});
};