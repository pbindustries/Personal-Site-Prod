var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var nodemon = require('gulp-nodemon');
var sass = require('gulp-sass');
var header = require('gulp-header');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var pkg = require('./package.json');

// Set the banner content
var banner = ['/*!\n',
  ' * Start Bootstrap - <%= pkg.title %> v<%= pkg.version %> \n',
  ' * Copyright 2016-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' */\n',
  ''
].join('');

// Compiles SCSS files from /scss into /css
gulp.task('sass', function() {
  return gulp.src('public/sass/*.scss')
    .pipe(sass())
    .pipe(header(banner, {
      pkg: pkg
    }))
    .pipe(gulp.dest('public/css/compiled'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Minify compiled CSS
gulp.task('minify-css', ['sass'], function() {
  return gulp.src('public/css/*.css')
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('public/css/minified'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// // Minify custom JS
// gulp.task('minify-js', function() {
//   return gulp.src('public/js/*.js')
//     .pipe(uglify())
//     .pipe(header(banner, {
//       pkg: pkg
//     }))
//     .pipe(rename({
//       suffix: '.min'
//     }))
//     .pipe(gulp.dest('public/js/minified'))
//     .pipe(browserSync.reload({
//       stream: true
//     }))
// });

// Default task
gulp.task('default', ['sass', 'minify-css']);

// Get uglify js working
// gulp.task('default', ['sass', 'minify-css', 'minify-js']);

// Configure the browserSync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: ''
    },
    open: false
  })
})

gulp.task('nodemon', function (cb) {
	
	var started = false;
	
	return nodemon({
		script: 'app.js'
	}).on('start', function () {
		if (!started) {
			cb();
			started = true; 
		} 
	});
});


// Dev task with browserSync
gulp.task('dev', ['browserSync', 'nodemon', 'sass', 'minify-css'], function() {

// Get uglify js working	
// gulp.task('dev', ['browserSync', 'nodemon', 'sass', 'minify-css', 'minify-js'], function() {
// 
  gulp.watch('public/sass/*.scss', ['sass']);
  gulp.watch('public/css/*.css', ['minify-css']);

  // Get uglify js working  
  // gulp.watch('public/js/*.js', ['minify-js']);
  
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('public/**/*.*', browserSync.reload);
});