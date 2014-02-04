module.exports = function (grunt) {

	'use strict';

	/*
		 Javascript settings - Edit this section
		 ========================================================================== */
	/**
	 * Specify which js files you want to include
	 */
	var jsFileList = [
		'js/helpers/helpers.js',
		'js/helpers/console.js',
		'js/script.js'
	];

	/**
	 * Specify your output directory
	 */
	var distDir = 'js/dist/';

	/**
	 * Specify the name of your compiled JS file
	 * which will be placed in the directory you define above
	 */
	var jsFile = 'app.min.js';

	/* ==================== */

	/**
	 * Project configuration
	 */
	grunt.initConfig({
		pkg: require('./package'),
		site: grunt.file.readYAML('src/data/site.yml'),


		/**
		 * JSHint
		 * https://github.com/gruntjs/grunt-contrib-jshint
		 * Manage the options inside .jshintrc file
		 */
		jshint: {
			all: jsFileList,
			options: {
				jshintrc: '.jshintrc'
			}
		},


		/**
		 * Sass compilation
		 * https://github.com/gruntjs/grunt-contrib-sass
		 * Separate options for dev and production environments
		 * Includes kickoff.scss and kickoff-old-ie.scss by default
		 * Also creates source maps
		 */
		sass: {
			dev: {
				options: {
					unixNewlines: true,
					style: 'expanded',
					lineNumbers: false,
					debugInfo : false,
					precision : 8,
					sourcemap: true
				},
				files: {
					'css/temp/kickoff.sass.css': 'scss/kickoff.scss',
					'css/temp/kickoff-old-ie.sass.css': 'scss/kickoff-old-ie.scss'
				}
			},
			production: {
				options: {
					style: 'compressed',
					precision : 8
				},
				files: {
					'css/temp/kickoff.sass.css': 'scss/kickoff.scss',
					'css/temp/kickoff-old-ie.sass.css': 'scss/kickoff-old-ie.scss'
				}
			},
			styleguide: {
				options: {
					unixNewlines: true,
					style: 'expanded',
					precision : 8,
					sourcemap: true
				},
				files: {
					'css/temp/styleguide.sass.css': 'scss/styleguide.scss'
				}
			}
		},


		/**
		 * Uglify
		 * https://github.com/gruntjs/grunt-contrib-uglify
		 * Minifies and concatinates your JS
		 * Also creates source maps
		 */
		uglify: {
			options: {

				mangle: true, // mangle: Turn on or off mangling
				beautify: false, // beautify: beautify your code for debugging/troubleshooting purposes
				compress: true,
				// report: 'gzip', // report: Show file size report

				// sourceMap: @string. The location of the source map, relative to the project
				sourceMap: distDir + jsFile + '.map',

				// sourceMappingURL: @string. The string that is printed to the final file
				sourceMappingURL: jsFile +'.map',

				// sourceMapRoot: @string. The location where your source files can be found. This sets the sourceRoot field in the source map.
				//sourceMapRoot: '../../'
			},

			/**
			 * Use the array at the top of this file to specify which js files you include
			 */
			js: {
				src: jsFileList,
				dest: distDir + jsFile
			}
		},

		clean: {
			all: ['dist/**/*.html']
		},


		/**
		 * Watch
		 * https://github.com/gruntjs/grunt-contrib-watch
		 * Watches your scss, js etc for changes and compiles them
		 */
		watch: {
			scss: {
				files: ['scss/**/*.scss'],
				//tasks: ['sass:dev', 'sass:styleguide'],
				//tasks: ['sass:dev', 'sass:styleguide', 'autoprefixer:dist', 'csso']
				tasks: ['sass:dev', 'sass:styleguide', 'autoprefixer:dist', 'copy:css']
			},

			js: {
				files: [
					'Gruntfile.js',
					'js/*.js',
					'js/libs/**/*.js'
				],
				tasks: ['uglify', 'copy:js']
			},

			assemble : {
				files: ['src/templates/**/*.hbs', 'src/templates/**/*.md'],
				tasks: ['clean', 'assemble', 'newer:copy'],
				options: {
					livereload: true
				}
			},

			livereload: {
				options: { livereload: true },
				files: [
					'css/*.css'
				]
			}
		},


		/**
		 * Autoprefixer
		 * https://github.com/ai/autoprefixer
		 * Auto prefixes your CSS using caniuse data
		 */
		autoprefixer: {
			dist : {
				options: {
					// Task-specific options go here - we are supporting
					// the last 2 browsers, any browsers with >1% market share,
					// and ensuring we support IE7 + 8 with prefixes
					browsers: ['> 5%', 'last 2 versions', 'firefox > 3.6', 'ie > 7'],
					map: true
				},
				files: {
					'css/kickoff.css': 'css/temp/kickoff.sass.css',
					'css/kickoff-old-ie.css': 'css/temp/kickoff-old-ie.sass.css',
					'css/styleguide/styleguide.css': 'css/temp/styleguide.sass.css'
				}
			}
		},


		/**
		 * Connect
		 * https://github.com/gruntjs/grunt-contrib-connect
		 * Start a static web server
		 */
		connect: {
			server: {
				options: {
					// port: 9001,
					// hostname: 'mysite.local',
					open: true,
					livereload: true,
					base: 'dist'
				}
			}
		},


		/**
		 * CSSO
		 * https://github.com/t32k/grunt-csso
		 * Minify CSS files with CSSO
		 */
		csso: {
			dist: {
				files: {
					'css/kickoff.min.css': ['css/kickoff.prefixed.css'],
					'css/kickoff-old-ie.min.css': ['css/kickoff-old-ie.prefixed.css']
				},

			}
		},

		assemble: {
			options: {
				data: 'src/**/*.{json,yml}',
				assets: '<%= site.destination %>/assets',
				helpers: ['helper-moment', 'handlebars-helper-eachitems', 'src/helpers/helper-*.js'],

				partials: ['src/templates/includes/**/*.hbs'],
				flatten: false,

				layout: 'default.hbs',
				layoutdir: 'src/templates/layouts'
			},

			default: {
				files: [{
					cwd: './src/templates/pages/',
					dest: '<%= site.destination %>',
					expand: true,
					src: ['**/*.hbs']
				}]
			}
		},


		copy: {
			dist: {
				files: [
					{ expand: true, cwd: './css', src: ['./**/*.*'], dest: 'dist/assets/css' },
					{ expand: true, cwd: './js', src: ['./**/*.*'], dest: 'dist/assets/js' },
					{ expand: true, cwd: './img', src: ['./**/*.*'], dest: 'dist/assets/img' },
					{ expand: true, cwd: './fonts', src: ['./**/*.*'], dest: 'dist/assets/fonts' }
				]
			},
			css: {
				files: [
					{ expand: true, cwd: './css', src: ['./**/*.*'], dest: 'dist/assets/css' }
				]
			},
			img: {
				files: [
					{ expand: true, cwd: './img', src: ['./**/*.*'], dest: 'dist/assets/img' }
				]
			},
			fonts: {
				files: [
					{ expand: true, cwd: './fonts', src: ['./**/*.*'], dest: 'dist/assets/fonts' }
				]
			},
			js: {
				files: [
					{ expand: true, cwd: './js', src: ['./**/*.*'], dest: 'dist/assets/js' }
				]
			}
		},


		/**
		 * Custom jQuery builder
		 * Check build numbers at jquery.com
		 */
		jquery: {
			build: {
				options: {
					prefix: "jquery-",
					minify: true
				},
				output: "js/libs/jquery",
				versions: {
					// Add items to the below arrays to remove them from the build
					// Remove everything we don't need from 2.x versions
					"2.0.3": [ "deprecated", "dimensions", "offset", "wrap"],

					// We can't remove sizzle from 1.x versions, so let's not specify it
					"1.10.2": [ "deprecated", "dimensions", "offset", "wrap"]
				}
			}
		}
	});

	// Load all the grunt tasks
	require('load-grunt-tasks')(grunt);
	grunt.loadNpmTasks('assemble');


	/**
	 * Available tasks:
		 * grunt        : run jshint, uglify and sass:dev
		 * grunt watch  : run sass:dev, uglify and livereload
		 * grunt dev    : run jshint, uglify and sass:dev
		 * grunt deploy : run jshint, uglify and sass:production
		 * grunt jquery : build custom version of jquery
	 */

	/**
	 * Default task
	 * run jshint, uglify and sass:dev
	 */
	// Default task
	grunt.registerTask('default', ['jshint', 'uglify', 'sass:dev']);


	/**
	 * A task for development
	 * run jshint, uglify and sass:dev
	 */
	grunt.registerTask('dev', ['jshint', 'uglify', 'sass:dev']);

	/**
	 * A task for your production environment
	 * run jshint, uglify and sass:production
	 */
	grunt.registerTask('deploy', ['jshint', 'uglify', 'sass:production']);
	// grunt.registerTask('production', ['jshint', 'uglify', 'sass:production', 'autoprefixer', 'csso']);

	/**
	 * A task for for a static server with a watch
	 * run connect and watch
	 */
	grunt.registerTask("serve", ["connect", "copy", "assemble", "watch"]);

};
