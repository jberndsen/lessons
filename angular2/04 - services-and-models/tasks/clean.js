module.exports = function (gulp, $) {
    'use strict';

    var del = require('del');
    var config = require('../config');

    gulp.task('clean', function (cb) {
        return del([config.paths.output], cb);
    })
};
