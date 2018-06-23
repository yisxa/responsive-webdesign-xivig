var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nestedcss = require('postcss-nested'),
    cssImport = require('postcss-import'),
    browserSync = require('browser-sync').create();


gulp.task('default', function () {

    console.log("my first code in gulp");

});

gulp.task('html', function () {

    console.log("cool html in gulp with watch");

});



gulp.task('styles', function () {
  
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, cssvars, nestedcss, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));

});


gulp.task('watch', function () {


    browserSync.init({
        notify : false,
        server : {
            baseDir : "app"
        }

    });



    watch('./app/index.html', function () {

        browserSync.reload();

    });

    watch('./app/assets/styles/**/*.css', function () {

        gulp.start('cssInject');
    });


});

gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});