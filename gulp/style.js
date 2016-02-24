import gulp from 'gulp';
import babel from 'gulp-babel';

gulp.task("style", () => {
  return gulp.src("assets/style/*.js")
    .pipe(babel())
    .pipe(gulp.dest("template/style"));
});
