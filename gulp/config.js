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
    },
    delete: {
        src: [developmentAssets]
    },
    assets: {
        src: srcAssets + '/**/*.*',
        dest: developmentAssets
    },
    template: {
        src: src + '/**/*.html',
        dest: development
    },
    sass: {
        src:  srcAssets + '/scss/**/*.scss',
        dest: developmentAssets + '/css',
        options: {
            noCache: true,
            compass: false,
            bundleExec: true,
            sourcemap: true,
            sourcemapPath: '../../assets/scss'
        }
    },
    autoprefixer: {
        browsers: [
            'last 2 versions',
            'safari 5',
            'ie 8',
            'ie 9',
            'opera 12.1',
            'ios 6',
            'android 4'
        ],
        cascade: true
    },
    browserify: {
        // Enable source maps
        debug: true,
        // Additional file extensions to make optional
        extensions: ['.coffee', '.hbs'],
        // A separate bundle will be generated for each
        // bundle config in the list below
        bundleConfigs: [{
            entries:    './' + srcAssets + '/javascripts/application.js',
            dest:       developmentAssets + '/js',
            outputName: 'application.js'
        }, {
            entries:    './' + srcAssets + '/javascripts/head.js',
            dest:       developmentAssets + '/js',
            outputName: 'head.js'
        }]
    },
    watch: {
        sass:    srcAssets + '/scss/**/*.scss',
        scripts: srcAssets + '/javascripts/**/*.js'
    }
};
