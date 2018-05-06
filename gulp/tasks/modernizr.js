var gulp = require('gulp'),
modernizr = require('gulp-modernizr');


//no errors but no modernizr.js file created at destination
gulp.task('modernizr', function(){
	return gulp.src(['./app/assets/styles/**/*/.css', './app/assets/scripts/**/*/.js'])
		.pipe(modernizr({
			"options":[
				"setClasses"
			]
		}))
		.pipe(gulp.dest('./app/temp/scripts'));
});