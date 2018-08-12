const gulp = require('gulp');
const image = require('gulp-image');
 
gulp.task('image', function () {
  gulp.src('./team/*')
    .pipe(image({
      pngquant: true,
      optipng: false,
      zopflipng: true,
      jpegRecompress: true,
      mozjpeg: true,
      guetzli: false,
      gifsicle: true,
      svgo: true,
      concurrent: 10,
      quiet: true // defaults to false
    }))
    .pipe(gulp.dest('./dist'));
});
 
gulp.task('default', ['image']);