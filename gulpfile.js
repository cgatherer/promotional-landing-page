var gulp = require('gulp'),
watch = require('gulp-watch');


gulp.task('default', function() {
	console.log('initial gulp task');
});

gulp.task('html', function() {
	console.log('initial watch task');
});

gulp.task('watch', function() {
	watch('./index.html', function(){
		gulp.start('html');
	});
});