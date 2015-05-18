module.exports = function (grunt) {

	'use strict';

	var opn = require('opn');


	var options = {
		pkg: require('./package'), // <%=pkg.name%>
		site: grunt.file.readYAML('statix/src/data/site.yml'),

		// Global Grunt vars. Edit this file to change vars
		config : require('./_grunt-configs/config.js')
	};

	require('load-grunt-tasks')(grunt, {pattern: ["grunt-*", "chotto", "assemble"]});

	// Load grunt configurations automatically
	var configs = require('load-grunt-configs')(grunt, options);

	// Define the configuration for all the tasks
	grunt.initConfig(configs);



	/* ==========================================================================
		Available tasks:
	 * grunt            : Alias for 'serve' task, below (the default task)
	 * grunt serve      : watch js & scss and run a local server
	 * grunt start      : Opens the post-install setup checklist on the Kickoff site
	 * grunt watch      : run sass:kickoff, uglify and livereload
	 * grunt dev        : run uglify, sass:kickoff & autoprefixer:kickoff
	 * grunt deploy     : run jshint, uglify, sass:kickoff and csso
	 * grunt styleguide : watch js & scss, run a local server for editing the styleguide
	 * grunt icons      : generate the icons. uses svgmin and grunticon
	 * grunt checks     : run jshint, scsslint and html validator
		 ========================================================================== */


	/**
	* GRUNT * Alias for 'serve' task, below
	*/
	grunt.registerTask('default', ['serve']);


	/**
	 * GRUNT SERVE * A task for for a static server with a watch
	 * run browserSync and watch
	 */
	grunt.registerTask('serve', [
		'clean:all',
		'shimly',
		'browserify:prod',
		'sass',
		'autoprefixer',
		'clean:tempCSS',
		'copy',
		'icons',
		'imagemin:images',
		'assemble',
		'browserSync:serve',
		'watch'
	]);


	/**
	 * GRUNT START
	 * Opens the post-install setup checklist on the Kickoff site
	 */
	grunt.registerTask('start', function() {
		opn('http://trykickoff.github.io/learn/checklist.html');
	});


	/**
	 * GRUNT DEV * A task for development
	 * run browserify, sass:kickoff & autoprefixer:kickoff
	 */
	grunt.registerTask('dev', [
		'clean:all',
		'shimly',
		'browserify:dev',
		'sass',
		'autoprefixer',
		'clean:tempCSS',
		'icons',
		'imagemin:images',
		'copy',
		'assemble'
	]);


	/**
	* GRUNT DEPLOY * A task for your production environment
	* run browserify, sass:kickoff, autoprefixer:dist and csso
	*/
	grunt.registerTask('deploy', [
		'clean:all',
		'assemble',
		'shimly',
		'newer:browserify:prod',
		'newer:sass',
		'newer:autoprefixer',
		'newer:csso',
		'clean:tempCSS',
		'icons',
		'imagemin:images',
		'copy:statix'
	]);


	/**
	 * GRUNT STYLEGUIDE * A task for the styleguide
	 * run browserify, sass:kickoff, sass:styleguide, autoprefixer:dist, autoprefixer:styleguide, connect:styleguide & watch
	 */
	grunt.registerTask('styleguide', [
		'shimly',
		'browserify:prod',
		'sass',
		'autoprefixer',
		'clean:tempCSS',
		'icons',
		'imagemin:images',
		'browserSync:styleguide',
		'watch'
	]);


	/**
	 * GRUNT ICONS * A task to create all icons using grunticon
	 * run clean, svgmin and grunticon
	 */
	grunt.registerTask('icons', [
		'clean:icons',
		'imagemin:grunticon',
		'grunticon'
	]);


	/**
	 * GRUNT CHECKS * Check code for errors
	 * run jshint
	 */
	grunt.registerTask('checks', [
		'jshint:project',
		'scsslint',
		'validation'
	]);


	/**
	 * Utility tasks
	 */
	// Compile JS

	grunt.registerTask('compileJS', [
		'browserify:dev'
	]);


	// Compile CSS
	grunt.registerTask('compileCSS', [
		'sass',
		'autoprefixer'
	]);

};
