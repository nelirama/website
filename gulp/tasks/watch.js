/**
 * Created by Marilena on 25/10/15.
 */

var gulp = require('gulp');
var config = require('../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browsersync'], function() {

    gulp.watch(config.sass, ['sass']);
    gulp.watch(config.scripts, ['scripts']);


});

