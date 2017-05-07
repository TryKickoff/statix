/**
 * gulp copy
 */
const gulp = require('gulp');
const config = require('../config');

gulp.task('copy', ['copy:statixJs', 'copy:statixCss', 'copy:statixImg', 'copy:statixSvg', 'copy:standaloneJS'], () => {
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

gulp.task('copy:statixSvg', () => {
	return gulp.src(`${config.svg.distDir}/*.*`)
		.pipe(gulp.dest(`${config.statix.dir}/${config.statix.assetsDir}/${config.statix.svgDir}`));
});

// Copy the standalone js files
gulp.task('copy:standaloneJS', () => {
	return gulp.src(`${config.js.srcDir}/standalone/*`)
		.pipe(gulp.dest(`${config.js.distDir}/standalone`));
});

// Copy webfonts
// gulp.task('copy:fonts', () => {
// 	return gulp.src(`${config.srcDir}/fonts/*`)
// 		.pipe(gulp.dest(`${config.distDir}/fonts`));
// });
