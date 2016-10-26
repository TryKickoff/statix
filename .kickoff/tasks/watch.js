/**
 * gulp watch
 */
const config = require('../config');
const gulp = require('gulp');
const runSequence = require('run-sequence');

gulp.task('watch', ['compile'], () => {
	gulp.watch([`${config.css.scssDir}/**/*.scss`], ['css']);
	gulp.watch([`${config.svg.srcDir}/**/*`], ['svg']);
	gulp.watch([`${config.img.srcDir}/**/*`], function (event) {
		runSequence('images', 'copy:statixImg');
	});
	gulp.watch(`${config.js.srcDir}/**/*.js`, ['javascript']);
	gulp.watch(`${config.statix.dir}/**/*.{md,hbs}`, ['assemble']);
});

// Alias of watch task
gulp.task('watcher', ['watch'])

