var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpSequence = require('gulp-sequence'),
    sass = require('gulp-sass');



gulp.task('sass', function () {
    return gulp.src("./src/assets/stylesheets/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./src/assets/stylesheets"))
        .pipe(browserSync.stream());
    browserSync.reload();
});

gulp.task('css', function () {

    return gulp.src('./src/assets/stylesheets/**/*.css')
        .pipe(sourcemaps.init())
        .pipe(postcss([require('precss'), require('autoprefixer')]))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/assets/stylesheets'));
});
gulp.task('html', function() {
    return gulp.src("./src/**/*.html")
        .pipe(gulp.dest("./public/"));
});
gulp.task('serve', function () {
    browserSync.init({
        server: {
            baseDir: "./public"
        }
    });
});

gulp.watch("./src/assets/stylesheets/**/*.css", ['sass']);
gulp.watch("./src/*.html").on('change', browserSync.reload);

gulp.task('default', gulpSequence('sass', 'html','css', 'serve', ));