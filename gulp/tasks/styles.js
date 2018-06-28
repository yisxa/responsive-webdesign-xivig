var gulp = require('gulp'),
	postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nestedcss = require('postcss-nested'),
    cssImport = require('postcss-import'),
    mixins = require('postcss-mixins'),
    hexrgba = require('postcss-hexrgba');


gulp.task('styles', function () {

    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([cssImport, mixins, cssvars, nestedcss, hexrgba, autoprefixer]))
        .on('error', function(errorInfo){
        	console.log(errorInfo);
        	this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles'));

});
