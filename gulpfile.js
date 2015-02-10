var gulp = require('gulp');
var liveReload = require('gulp-livereload')

var paths = {
	html:'**/*.html'
}
gulp.task('html',function(){
	return gulp.src(paths.html).
	pipe(liveReload())
});

gulp.task('watch',function(){
	liveReload.listen();
	gulp.watch(paths.html,['html'])
});

gulp.task('default',['watch'])