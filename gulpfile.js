// importing src, dest, watch, series functions from gulp
const { src, dest, watch, series } = require('gulp')

// import gulp sass plug in
// require('gulp-sass'): returns a function
// invoke it by passing sass compiler
// invoke const sass to compile sass to css
const sass = require('gulp-sass')(require('sass'))

// function to compile sass into css
// source sass file compiled into css file and pipe it to destination folder
function buildStyles() {

    return src('ananyaCSS/**/*.scss') // pass the relative path of source file 

    .pipe(sass()) // compile sass file

    .pipe(dest('css')) // piping to destination function
    // pass the relative path of a folder where compiled css file will be compiled into

}

// actively watches source file
// whenever changes saved, buildStyles function is ran automatically to stay updated
function watchTask() {

    // watch( [relative path of scss file], function to be run )
    watch( ['ananyaCSS/**/*.scss'], buildStyles )

}

exports.default = series(buildStyles, watchTask)
