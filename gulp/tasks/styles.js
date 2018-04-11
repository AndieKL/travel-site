var gulp = require('gulp'),
postcss = require('gulp-postcss'), 
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins');


gulp.task('styles', function() {
	//return: gulp.src is an asynchronous function
	return gulp.src('./app/assets/styles/styles.css')
		.pipe(postcss([cssImport,mixins, cssvars, nested, autoprefixer]))
		//error handling so that watch doesn't stop but still shows the error information
		.on('error', function(errorInfo){
			console.log(errorInfo.toString());
			this.emit('end');
		})
		.pipe(gulp.dest('./app/temp/styles'));
});