var gulp = require('gulp'),
    wiredep = require('wiredep');

require('../../gulpfile.js');

gulp.task('wiredep', function(){
  wiredep({ src: 'index.html' });
});

gulp.task('bower', function(){
  gulp.watch('bower.json', [ 'wiredep' ]);
});

gulp.task('default', [ 'connect', 'watch', 'bower' ]);
