/**
 * gulp copy
 */
const gulp = require('gulp');
const config = require('../config');

gulp.task('copy', ['copy:statixJs', 'copy:statixCss', 'copy:statixImg'], () => {
	console.log('Copying files');
});

gulp.task('copy:statixJs', () => {
	return gulp.src(`${config.js.distDir}/**/*.*`)
		.pipe(gulp.dest(`${config.statix.dir}/${config.statix.assetsDir}/${config.statix.jsDir}`));
});

gulp.task('copy:statixCss', () => {
	return gulp.src(`${config.css.distDir}/**/*.{css,map}`)
		.pipe(gulp.dest(`${config.statix.dir}/${config.statix.assetsDir}/${config.statix.cssDir}`));
});

gulp.task('copy:statixImg', () => {
	return gulp.src(`${config.img.distDir}/**/*.*`)
		.pipe(gulp.dest(`${config.statix.dir}/${config.statix.assetsDir}/${config.statix.imgDir}`));
});

// Copy webfonts
// gulp.task('copy:fonts', () => {
// 	return gulp.src(`${config.srcDir}/fonts/*`)
// 		.pipe(gulp.dest(`${config.distDir}/fonts`));
// });
