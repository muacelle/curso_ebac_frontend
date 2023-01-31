const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');

function compileSass() {
    return gulp.src('./source/styles/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./build/styles'));
}

function compressJS() {
    return gulp.src('./source/scripts/*.js').pipe(uglify()).pipe(gulp.dest('./build/scripts'))
}

function compressImages() {
    return gulp.src('./source/images/*').pipe(imagemin()).pipe(gulp.dest('./build/images'))
}

exports.default = () => {
    gulp.watch('./source/styles/*.scss', {ignoreInitial: false}, gulp.series(compileSass));
    gulp.watch('./source/scripts/*.js', {ignoreInitial: false}, gulp.series(compressJS));
    gulp.watch('./source/images/*', {ignoreInitial: false}, gulp.series(compressImages));
}