/**
 * gulp watch
 */
const config = require('../config');
const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('watch', ['compile'], () => {
	gulp.watch(['**/*.scss'], { cwd: config.css.scssDir }, ['css'])
		.on('change', config.gulp.onChange);

	gulp.watch(['**/*'], { cwd: config.svg.srcDir }, function (event) {
		runSequence('svg', 'copy:statixSvg');
	})
		.on('change', config.gulp.onChange);

	gulp.watch(['**/*'], { cwd: config.img.srcDir }, function (event) {
		runSequence('images', 'copy:statixImg');
	})
		.on('change', config.gulp.onChange);

	gulp.watch('**/*.js', { cwd: config.js.srcDir }, function (event) {
		runSequence('javascript', 'copy:statixJs');
	})
		.on('change', config.gulp.onChange);

	gulp.watch('**/*.{md,hbs}', { cwd: `${config.statix.dir}${config.statix.srcDir}` }, ['assemble'])
		.on('change', config.gulp.onChange);
});

// Alias of watch task
gulp.task('watcher', ['watch'])

