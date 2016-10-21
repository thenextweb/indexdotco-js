var gulp = require('gulp');
var webpack = require('webpack-stream');
var uglify = require('gulp-uglify');
var path = require('path');
var mochaPhantomJS = require('gulp-mocha-phantomjs');

var webpackModule = {
	loaders: [
		{
			test: /\.css$/, loader: "raw"
		},
		{
			test: /\.mustache$/, loader: "raw"
		},
		{
			test: /.js?$/,
			loader: 'babel-loader',
			query: {
				presets: ['es2015']
			}
		}
	]
};

gulp.task('test', function () {
	return gulp
	.src('test/basic.html')
	.pipe(mochaPhantomJS({
		suppressStderr: true,
		phantomjs: {
			viewportSize: {
				width: 1440,
				height: 900
			},
			settings: {
				webSecurityEnabled: false
			}
		}
	}));
});

gulp.task('default', function() {
	return gulp.src('src/index.js')
		.pipe(webpack({
			watch: true,
			devtool: 'source-map',
			output: {
				filename: 'indexdotco-dev.js'
			},
			module: webpackModule,
			resolve: {
				root: path.resolve('./src')
			}
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('make', function() {
	return gulp.src('src/index.js')
		.pipe(webpack({
			output: {
				filename: 'indexdotco.js'
			},
			module: webpackModule,
			resolve: {
				root: path.resolve('./src')
			}
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/'))
})
