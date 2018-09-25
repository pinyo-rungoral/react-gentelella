var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');
var runSequence = require('run-sequence');

gulp.task('clean', function() {
  gulp
    .src(['./dest/**','./demo/node_modules/react-gentelella/*.*'],{read: false})
    .pipe(clean());
});
gulp.task('compile', function() {
  gulp
    .src('./src/*.tsx')
    .pipe(ts({
      declaration: true,
      jsx: "react"
    }))
    .pipe(gulp.dest('./dest'));
});
gulp.task('package', function() {
  gulp
    .src('./package.json')   
    .pipe(gulp.dest('./dest'));
});
gulp.task('publish', function() {
  gulp
    .src('./dest/**')   
    .pipe(gulp.dest('./demo/node_modules/react-gentelella'));
});

gulp.task('default', function(){runSequence('clean', 'compile','package','publish')});