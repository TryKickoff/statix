module.exports.tasks = {

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
				base: 'statix/dist'
			}
		},
		styleguide: {
			options: {
				open: {
					target: 'http://0.0.0.0:8000/_docs/styleguide.html'
				},
				livereload: true
			}
		},
		start: {
			options: {
				open: {
					target: 'http://0.0.0.0:8000/_docs/index.html'
				},
				livereload: true
			}
		}
	},


	/**
	 * browserSync
	 * http://www.browsersync.io/docs/options/
	 * http://www.browsersync.io/docs/grunt/
	 */
	browserSync: {
		serve: {
			bsFiles: {
				src: [
					'statix/dist/assets/css/*.css',
					'<%=config.js.distDir%>/**/*.js',
					'statix/dist/**/*.html'
				]
			},
			options: {
				watchTask: true,
				server: {
					baseDir: "./statix/dist/"
				}
			}
		}
	},



	/**
	 * Assemble
	 * http://assemble.io/
	 * Static site generator
	 */
	assemble: {
		options: {
			data: 'statix/src/**/*.{json,yml}',
			assets: '<%= site.destination %>/assets',
			helpers: ['helper-moment', 'handlebars-helper-eachitems', 'statix/src/helpers/helper-*.js'],

			partials: ['statix/src/templates/includes/**/*.hbs'],
			flatten: false,

			layout: 'default.hbs',
			layoutdir: 'statix/src/templates/layouts'
		},

		default: {
			files: [{
				cwd: './statix/src/templates/pages/',
				dest: '<%= site.destination %>',
				expand: true,
				src: ['**/*.hbs']
			}]
		}
	}

}
