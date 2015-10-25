/**
 * Created by Marilena on 25/10/15.
 */

var src               = 'app';
var build             = 'build';
var development       = 'build/development';
var srcAssets         = 'app/assets';
var developmentAssets = 'build/assets';


module.exports = {
    browsersync: {
        development: {
            server: {
                baseDir: [development, build, src]
            },
            port: 3000,
            files: [
                developmentAssets + '/css/*.css',
                developmentAssets + '/js/*.js'
            ]
        }
    }
};
