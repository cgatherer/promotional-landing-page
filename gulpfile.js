var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
browserSync = require('browser-sync').create();

gulp.task('styles', function() {
  return gulp.src('./assets/css/styles.css')
    .pipe(postcss([cssvars, nested, autoprefixer]))
    .pipe(gulp.dest('./temp/styles'));
});

gulp.task('scripts', function() {
  return gulp.src('./assets/js/scripts.js')
    .pipe(gulp.dest('./temp/scripts'));
});

gulp.task('watch', function() {
  
  browserSync.init({
  	notify: false,
  	server: {
  		baseDir: "./"
  	}
  });

  watch('./index.html', function() {
    browserSync.reload();
  });

  watch('./assets/css/**/*.css', function() {
    gulp.start('cssInject');
  });
  
  watch('./assets/js/**/*.css', function() {
    gulp.start('scripts');
  });

});

gulp.task('cssInject', ['styles'], function() {
	return gulp.src('./temp/styles/styles.css')
		.pipe(browserSync.stream());
});