var gulp = require('gulp');
var webpack = require('webpack-stream');
var uglify = require('gulp-uglify');

var webpackModule = {
	loaders: [
		{
			test: /\.css$/, loader: "raw"
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

gulp.task('default', function() {
	return gulp.src('src/index.js')
		.pipe(webpack({
			watch: true,
			devtool: 'source-map',
			output: {
				filename: 'puragi-dev.js'
			},
			module: webpackModule
		}))
		.pipe(gulp.dest('dist/'));
});

gulp.task('make', function() {
	return gulp.src('src/index.js')
		.pipe(webpack({
			output: {
				filename: 'indexdotco.js'
			},
			module: webpackModule
		}))
		.pipe(uglify())
		.pipe(gulp.dest('dist/'));
})
