var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
    
    console.log("my first code in gulp");
    
});

gulp.task('html', function(){
    
    console.log("cool html trick");
    
});

gulp.task('watch', function(){
    
    watch('./app/index.html', function(){
    
        gulp.start('html');
    
    });

});