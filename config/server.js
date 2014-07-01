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
				base: 'dist'
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
					target: 'http://0.0.0.0:8000/docs/'
				},
				livereload: true,
				base: 'dist'
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
	}

}
