/*
/!**
 * Created by Marilena on 26/10/15.
 *!/

var gulp = require('gulp');
var scsslint = require('gulp-jshint');
var stylish = require(jshint-stylish);
var config = require('../config').jshint;

/!**
 * Check Javascript syntax with JSHint
 *!/

gulp.task('jshint', function() {
    return gulp.src(config.src)
        .pipe(jshint())
        .pipe(jshint.reporter(stylish));
});
*/
