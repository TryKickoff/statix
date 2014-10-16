module.exports = function (grunt) {

	'use strict';

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);


	var options = {
		pkg: require('./package'), // <%=pkg.name%>
		site: grunt.file.readYAML('statix/src/data/site.yml'),

		/**
		 * Grunt global vars
		 * Many of the Grunt tasks use these vars
		 */
		config : {
			src: "_grunt-configs/*.js",

			css : {
				distDir : 'css',     // <%=config.css.distDir%>
				srcFile : 'kickoff', // <%=config.css.srcFile%>
				scssDir : 'scss'     // <%=config.css.scssDir%>
			},

			js : {
				distDir  : 'statix/dist/assets/js/', // <%=config.js.distDir%>
				distFile : 'app.min.js', // <%=config.js.distFile%>
				srcFile : 'js/script.js', // <%=config.js.srcFile%>

				// <%=config.js.fileList%>
				fileList : [
					'js/**/*.js',
					'bower_modules/**/*.js',
				]
			},

			testing: {
				visual : {
					sizes: [ '600', '1000', '1200' ], // <%=config.testing.visual.sizes%>

					// <%=config.testing.visual.urls%>
					urls : [
						'http://localhost:3000',
						'http://localhost:3000/_docs/',
						'http://localhost:3000/_docs/styleguide.html'
					]
				}
			}
		}
	};

	// Load grunt configurations automatically
	var configs = require('load-grunt-configs')(grunt, options);

	// Define the configuration for all the tasks
	grunt.initConfig(configs);

	//load assemble task for compiling static templates
	grunt.loadNpmTasks('assemble');



	/* ==========================================================================
		Available tasks:
	 * grunt            : run jshint, uglify and sass:kickoff
	 * grunt start      : run this before starting development
	 * grunt watch      : run sass:kickoff, uglify and livereload
	 * grunt dev        : run uglify, sass:kickoff & autoprefixer:kickoff
	 * grunt deploy     : run jshint, uglify, sass:kickoff and csso
	 * grunt styleguide : watch js & scss, run a local server for editing the styleguide
	 * grunt serve      : watch js & scss and run a local server
	 * grunt icons      : generate the icons. uses svgmin and grunticon
	 * grunt check      : run jshint
	 * grunt travis     : used by travis ci only
		 ========================================================================== */

	/**
	* GRUNT * Default task
	* run browserify, sass:kickoff and autoprefixer
	*/
	grunt.registerTask('default', [
		'clean:all',
		'assemble',
		'shimly',
		'newer:browserify:prod',
		'newer:sass:kickoff',
		'autoprefixer:kickoff',
		'copy:dist',
		'browserSync:serve',
		'watch'
	]);

	/**
	* GRUNT START * Run this to
	* run bower install, browserify, sass and autoprefixer
	*/
	grunt.registerTask('start', [
		'clean:all',
		'assemble',
		'shell:bowerinstall',
		'shimly',
		'browserify:prod',
		'sass:kickoff',
		'sass:styleguide',
		'autoprefixer:kickoff',
		'autoprefixer:styleguide',
		'copy:dist',
		'connect:start',
		'watch'
	]);


	/**
	 * GRUNT DEV * A task for development
	 * run browserify, sass:kickoff & autoprefixer:kickoff
	 */
	grunt.registerTask('dev', [
		'clean:all',
		'assemble',
		'shimly',
		'browserify:dev',
		'sass:kickoff',
		'autoprefixer:dist',
		'copy:dist'
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
		'newer:sass:kickoff',
		'newer:autoprefixer:kickoff',
		'newer:csso',
		'copy:dist'
	]);


	/**
	 * GRUNT STYLEGUIDE * A task for the styleguide
	 * run browserify, sass:kickoff, sass:styleguide, autoprefixer:dist, autoprefixer:styleguide, connect:styleguide & watch
	 */
	grunt.registerTask('styleguide', [
		'shimly',
		'browserify:prod',
		'sass:kickoff',
		'sass:styleguide',
		'autoprefixer:kickoff',
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
		'shimly',
		'browserify:prod',
		'sass:kickoff',
		'autoprefixer:kickoff',
		'copy:dist',
		'browserSync:serve',
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
	 * GRUNT CHECKS * Check code for errors
	 * run jshint
	 */
	grunt.registerTask('checks', [
		'jshint:project'
	]);


	//Travis CI to test build
	grunt.registerTask('travis', [
		'jshint:project',
		'browserify:prod',
		'sass:kickoff',
		'autoprefixer:kickoff'
	]);

};
