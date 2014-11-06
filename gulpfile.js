var gulp = require('gulp'),
    // util = require('gulp-util'),
    connect = require('gulp-connect'),
    yargs = require('yargs'),
    argv = yargs.argv,
    _ = require('lodash');

/* === Example Tasks === */
gulp.task('mocha', function(){
    util.log(_.template('Running `mocha` on "<%= tests %>"', argv));

    gulp.src(argv.tests)
      .pipe(mocha({ reporter: 'nyan' }));
});

gulp.task('tests', function(){
    gulp.watch([ argv.tests ], [ 'mocha' ]);
});

gulp.task('connect', function(){
  connect.server({
    livereload: true
  });
});

gulp.task('livereload', function(){
    gulp.src('Dojos/**/*.html')
      .pipe(connect.reload());
});

gulp.task('watch', function(){
    gulp.watch([ 'Dojos/**/*.*' ], [ 'livereload' ]);
});

gulp.task('default', ['connect', 'watch']);
