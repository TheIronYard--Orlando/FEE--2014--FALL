var gulp = require('gulp'),
    connect = require('gulp-connect');

{ /* === Vanilla Connect === */
  gulp.task('connect', function(){
    connect.server({
      livereload: true
    });
  });

  gulp.task('reload', function(){
    gulp.src('./Dojos/**/*.*')
      .pipe(connect.reload());
  });

  gulp.task('watch', function(){
    gulp.watch(['./Dojos/**/*.*'], ['reload']);
  });
} // END Vanilla Connect

gulp.task('default', ['connect', 'watch']);

