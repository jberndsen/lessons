module.exports = function (gulp, $) {
    'use strict';

    var typescript = require('gulp-typescript');
    var runSequence = require('run-sequence');
    var tscConfig = require('../tsconfig.json');
    var config = require('../config');

    // todo: add a task for wiring node dependencies
    gulp.task('build', function (cb) {
        runSequence('clean', 'copy-html', 'compile-typescript', cb);
    });
    
    gulp.task('compile-typescript', function() {
        var tsResult = gulp
            .src(config.paths.app + '/**/*.ts')
            .pipe(typescript(tscConfig.compilerOptions));

        return tsResult.js.pipe(gulp.dest(config.paths.output));
    });

    gulp.task('copy-html', function () {
        return gulp.src('src/*.html')
            .pipe(gulp.dest(config.paths.output));
    });
};