var gulp = require('gulp'),
    $ = require("gulp-load-plugins")({
        lazy: true
    }),
    sass = require('gulp-sass'),
    connect = require('gulp-connect-php'),
    del = require('del'),
    uglify = require('gulp-uglify'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    imagemin = require('gulp-imagemin'),
    browserSync = require('browser-sync'),
    runSequence = require("run-sequence");

gulp.task('sass', function() {
    return gulp.src('./sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.stream());
});

gulp.task('del', function () {
    return del([ '_build/**/*', './_build' ]);
});

gulp.task('serve', ['sass'], function() {

    connect.server({}, function() {
        browserSync({
            proxy: '127.0.0.1:8000'
        });
    });

    gulp.watch('**/*.php').on('change', function() {
        browserSync.reload();
    });

    gulp.watch("**/*.scss", ['sass']);
    gulp.watch("**/*.html").on('change', browserSync.reload);
});

gulp.task("useref", function(){

    gulp.src("*.php")
        .pipe(useref())
        .pipe( gulpif("*.js", uglify() ) )
        .pipe(gulp.dest("_build/"));

});

gulp.task('images', () =>
    gulp.src('images/**/*').pipe(imagemin()).pipe(gulp.dest('_build/images/'))
);

gulp.task('copy', function(){
    gulp.src([
        'fonts/*', 'img/*', 'webservice/**/*'
    ], {
        base: "./"
    })
        .pipe(gulp.dest("_build/"));
});

gulp.task('build', function(cb){
    runSequence('del', 'useref', 'copy', 'images', cb)
})

gulp.task("build:server", ["build"], function(){

    connect.server({}, function() {
        browserSync({
            proxy: '127.0.0.1:8000'
        });
    });

})

gulp.task("default", ['sass', 'serve']);
