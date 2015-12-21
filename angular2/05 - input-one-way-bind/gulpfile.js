var gulp = require('gulp');
var $ = require('gulp-load-plugins')({lazy: true});
var config = require('./config');

// grab task list
var taskList = require('fs').readdirSync(config.paths.tasks).filter(function(fileName) {
    return fileName.match(/\.js$/);
});

// load available tasks
taskList.forEach(function (taskFile) {
    require(config.paths.tasks + '/' + taskFile)(gulp, $);
});

// set the default task
gulp.task('default', ['serve']);