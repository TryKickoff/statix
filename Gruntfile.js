module.exports = function (grunt) {

	'use strict';

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);


	var options = {
		pkg: require('./package'), // <%=pkg.name%>
		site: grunt.file.readYAML('src/data/site.yml'),

		/**
		 * Config - Edit this section
		 * ==========================
		 * Choose javascript dist filename
		 * Choose javascript dist location
		 * Choose javascript files to be uglified
		 */
		config : {
			js : {
				// <%=config.js.distDir%>
				distDir  : 'js/dist/',

				// <%=config.js.distFile%>
				distFile : 'app.min.js',

				// <%=config.js.srcFile%>
				srcFile : 'js/script.js',

				// <%=config.js.watchList%>
				fileList : [
					'js/**/*.js',
					'!js/dist/**/*.js',
					'bower_components/**/*.js',
				]
			}
		}
	};

	// Load grunt configurations automatically
	var configs = require('load-grunt-configs')(grunt, options);

	// Define the configuration for all the tasks
	grunt.initConfig(configs);

	//load assemble task
	grunt.loadNpmTasks('assemble');



	/* ==========================================================================
		Available tasks:
* grunt            : run jshint, browserify and sass:kickoff
* grunt start      : run this before starting development
* grunt watch      : run sass:kickoff, browserify and livereload
* grunt dev        : run browserify, sass:kickoff & autoprefixer:dist
* grunt deploy     : run jshint, browserify, sass:kickoff and csso
* grunt jquery     : build custom version of jquery
* grunt styleguide : watch js & scss, run a local server for editing the styleguide
* grunt serve      : watch js & scss and run a local server
* grunt icons      : generate the icons. uses svgmin and grunticon
* grunt jscheck    : run jshint & jscs
* grunt travis     : used by travis ci only
		 ========================================================================== */

	/**
	* GRUNT * Default task
	* run browserify, sass:kickoff and autoprefixer
	*/
	grunt.registerTask('default', [
		'newer:browserify:prod',
		'newer:sass:kickoff',
		'autoprefixer:dist'
	]);

	/**
	* GRUNT START * Run this to
	* run jquery builder, browserify, sass and autoprefixer
	*/
	grunt.registerTask('start', [
		'clean:all',
		'assemble',
		'jquery',
		'shell:bowerinstall',
		'browserify:prod',
		'sass:kickoff',
		'sass:styleguide',
		'autoprefixer:dist',
		'autoprefixer:styleguide',
		'copy',
		'connect:start',
		'watch'
	]);


	/**
	 * GRUNT DEV * A task for development
	 * run browserify, sass:kickoff & autoprefixer:dist
	 */
	grunt.registerTask('dev', [
		'browserify:dev',
		'sass:kickoff',
		'autoprefixer:dist'
	]);


	/**
	* GRUNT DEPLOY * A task for your production environment
	* run browserify, sass:kickoff, autoprefixer:dist and csso
	*/
	grunt.registerTask('deploy', [
		'newer:browserify:prod',
		'newer:sass:kickoff',
		'newer:autoprefixer:dist',
		'newer:csso'
	]);


	/**
	 * GRUNT STYLEGUIDE * A task for the styleguide
	 * run browserify, sass:kickoff, sass:styleguide, autoprefixer:dist, autoprefixer:styleguide, connect:styleguide & watch
	 */
	grunt.registerTask('styleguide', [
		'browserify:prod',
		'sass:kickoff',
		'sass:styleguide',
		'autoprefixer:dist',
		'autoprefixer:styleguide',
		'connect:styleguide',
		'watch'
	]);


	/**
	 * GRUNT SERVE * A task for for a static server with a watch
	 * run connect and watch
	 */
	grunt.registerTask('serve', [
		'clean:all',
		'assemble',
		'browserify:prod',
		'sass:kickoff',
		'sass:styleguide',
		'autoprefixer:dist',
		'svgmin',
		'grunticon',
		'copy',
		'connect:server',
		'watch'
	]);


	/**
	 * GRUNT ICONS * A task to create all icons using grunticon
	 * run clean, svgmin and grunticon
	 */
	grunt.registerTask('icons', [
		'clean:icons',
		'svgmin',
		'grunticon'
	]);


	/**
	 * GRUNT JSCHECK * Check js for errors and style problems
	 * run jshint, jscs
	 */
	// Default task
	grunt.registerTask('jscheck', [
		'jshint',
		'jscs'
	]);


	//Travis CI to test build
	grunt.registerTask('travis', [
		'jshint',
		'browserify:prod',
		'sass:kickoff',
		'autoprefixer:dist'
	]);

};
