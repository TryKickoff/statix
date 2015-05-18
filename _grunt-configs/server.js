module.exports.tasks = {

	/**
	 * browserSync
	 * http://www.browsersync.io/docs/options/
	 * http://www.browsersync.io/docs/grunt/
	 */
	browserSync: {
		serve: {
			bsFiles: {
				src: [

						'<%= config.statix.dir%>/dist/assets/css/*.css',
						'<%= config.statix.dir%>/dist/**/*.html',
						'<%=config.js.distDir%>/**/*.js'

				]
			},
			options: {
				watchTask: true,
				server: {

					baseDir: './<%= config.statix.dir%>/dist'

				}
			}
		},


		styleguide: {
			bsFiles: {
				src: [
					'<%=config.distDir%>/**/*.*',
					'*.html'
				]
			},
			options: {
				watchTask: true,
				server: {
					baseDir: './',
					index: 'styleguide/index.html'
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
			data: '<%= config.statix.dir%>/src/**/*.{json,yml}',
			assets: '<%= config.statix.dir%>/dist/assets',
			helpers: ['helper-moment', 'handlebars-helper-eachitems', '<%= config.statix.dir%>/src/helpers/helper-*.js'],

			partials: ['<%= config.statix.dir%>/src/templates/includes/**/*.hbs'],
			flatten: false,

			layout: 'default.hbs',
			layoutdir: '<%= config.statix.dir%>/src/templates/layouts'
		},

		default: {
			files: [{
				cwd: './<%= config.statix.dir%>/src/templates/pages/',
				dest: '<%= site.destination %>',
				expand: true,
				src: ['**/*.hbs']
			}]
		}
	}

}
