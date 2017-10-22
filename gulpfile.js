var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    postcss = require('gulp-postcss'),
    sourcemaps = require('gulp-sourcemaps'),
    gulpSequence = require('gulp-sequence'),
    reload      = browserSync.reload;
    sass = require('gulp-sass');



gulp.task('sass', function () {
    return gulp.src("./src/assets/stylesheets/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("./src/assets/stylesheets"))
        .pipe(browserSync.stream());
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
gulp.task('js', function() {
    return gulp.src("./src/assets/js/*.js")
        .pipe(gulp.dest("./public/assets/js"));
});
gulp.task('serve', function () {
    browserSync.init({
        open: false,
        reloadDelay: 1000,
        server: {
            baseDir: "./public"
        }
    });
});

gulp.watch("./src/assets/stylesheets/**/*.scss", ['sass']);
gulp.watch("./src/assets/stylesheets/**/*.css", ['css']).on('change', browserSync.reload);
gulp.watch("./src/assets/js/*.js", ['js']).on('change', browserSync.reload);
gulp.watch("./src/*.html", ['html']).on('change', browserSync.reload);

gulp.task('default', gulpSequence('sass','css','js', 'serve', ));