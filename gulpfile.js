var gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('opn');

{ /* === Vanilla Connect === */
  gulp.task('connect', function(){
    connect.server({
      directory: true,
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

gulp.task('default', ['connect', 'watch'], function(){
  open('http://localhost:8080');
});

