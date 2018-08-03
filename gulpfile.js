const gulp = require('gulp');

let cleanCSS = require('gulp-clean-css');

gulp.task('minify-css', () => {
  return gulp.src('src/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css'));
});


const uglify = require('gulp-uglify');
const pump = require('pump');
 
gulp.task('compress', function (cb) {
  pump([
        gulp.src('src/js/*.js'),
        uglify(),
        gulp.dest('dist/js')
    ],
    cb
  );
});


const image = require('gulp-image');
 
gulp.task('image', function () {
  gulp.src('src/images/*')
    .pipe(image())
    .pipe(gulp.dest('dist/images'));
});

/*
--Top Level Functions--
gulp.task - Define tasks
gulp.src - Point to files to use
gulp.dest - Points to  folder to output
gulp.watch - watch files and folders for changes
*/