var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('jscompress',function(){
    return gulp.src('./src/*.js')
    .pipe(uglify({
        mangle: true,
        compress: true
    }))
    .pipe(gulp.dest('dist/js'))
});