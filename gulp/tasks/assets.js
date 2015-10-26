/**
 * Created by Marilena on 25/10/15.
 */

var gulp = require('gulp');
var config = require('../config').assets;

gulp.task('assets', function() {
    gulp.src(config.src)
        .pipe(gulp.dest(config.dest));
});