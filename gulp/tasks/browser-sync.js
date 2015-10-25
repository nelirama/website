/**
 * Created by Marilena on 25/10/15.
 */

var gulp        = require('gulp');
var browsersync = require('browser-sync');
var config      = require('../config').browsersync.development;

/**
 * Run the build task and start a server with BrowserSync
 */
gulp.task('browsersync', function() {
    browsersync(config);
});
