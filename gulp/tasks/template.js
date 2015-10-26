/**
 * Created by Marilena on 25/10/15.
 */

var gulp = require('gulp');
var config = require('../config').template;

gulp.task('template', function() {
    gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});