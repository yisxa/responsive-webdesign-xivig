var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();



gulp.task('watch', function () {


    browserSync.init({
        notify : false,
        server : {
            baseDir : "app",

            // Open the site in Chrome
            browser: "google chrome"
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


gulp.task('cssInject', ['styles'], function(){

    return gulp.src('./app/temp/styles/styles.css')
    .pipe(browserSync.stream());
});
