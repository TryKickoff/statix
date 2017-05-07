/**
 * gulp watch
 */
const config = require('../config');
const gulp = require('gulp');

gulp.task('watch', ['compile'], () => {
	gulp.watch(['**/*.scss'], { cwd: config.css.scssDir }, ['css'])
		.on('change', config.gulp.onChange);

	gulp.watch(['**/*'], { cwd: config.svg.srcDir }, ['svg'])
		.on('change', config.gulp.onChange);

	gulp.watch(['**/*'], { cwd: config.img.srcDir }, ['images'])
		.on('change', config.gulp.onChange);

	gulp.watch('**/*.js', { cwd: config.js.srcDir }, ['javascript'])
		.on('change', config.gulp.onChange);

	gulp.watch('**/*.{md,hbs}', { cwd: config.statix.dir }, ['assemble'])
		.on('change', config.gulp.onChange);
});

// Alias of watch task
gulp.task('watcher', ['watch'])

