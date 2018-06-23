var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nestedcss = require('postcss-nested'),
    cssImport = require('postcss-import');


gulp.task('styles', function () {
  
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, nestedcss, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));

});


gulp.task('cssInject', ['styles'], function(){

    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});