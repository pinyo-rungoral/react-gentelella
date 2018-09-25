var gulp = require('gulp');
var clean = require('gulp-clean');
var ts = require('gulp-typescript');
var runSequence = require('run-sequence');
var bump = require('gulp-bump');

gulp.task('clean', function() {
  return gulp
    .src(['./dest/**','./demo/src/react-gentelella/**'],{read: false})
    .pipe(clean());
});
gulp.task('compile', function() {
  return  gulp
    .src('./src/**/*.tsx')
    .pipe(ts({
      declaration: true,
      jsx: "react",
      strict:true,
      lib:[
        'es6','dom'
      ]
    }))
    .pipe(gulp.dest('./dest'));
});
gulp.task('package', function() {
  return  gulp
    .src('./package.json')   
    .pipe(gulp.dest('./dest'));
});
gulp.task('publish', function() {
  return gulp
    .src('./dest/**')   
    .pipe(gulp.dest('./demo/src/react-gentelella/'));
});


gulp.task('default', function(){
  return gulp.watch('./src/**/*.tsx',function(){runSequence('clean', 'compile','package','publish')});
});