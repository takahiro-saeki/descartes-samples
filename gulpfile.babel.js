import gulp from 'gulp';
import requireDir from 'require-dir';
requireDir('./gulp');

gulp.task('default', ['js', 'style', 'ejs', 'webserver', 'watch']);
