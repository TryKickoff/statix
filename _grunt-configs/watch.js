module.exports.tasks = {

	/**
	* Watch
	* https://github.com/gruntjs/grunt-contrib-watch
	* Watches your scss, js etc for changes and compiles them
	*/
	watch: {
		scss: {
			files: ['<%=config.css.scssDir%>/**/*.scss'],
			tasks: [
				'sass:kickoff',
				'autoprefixer:kickoff'
			]
		},

		"styleguide_scss": {
			files: ['<%=config.css.scssDir%>/styleguide.scss'],
			tasks: [
				'sass:styleguide',
				'autoprefixer:styleguide'
			]
		},


		js: {
			files: [
				'js/**/*.js',
				'!js/dist/**/*.js',
				'!statix/assets/js/dist/**/*.js'
			],
			tasks: [
				'browserify:dev'
			]
		},

		assemble : {
			files: ['statix/src/templates/**/*.hbs', 'statix/src/templates/**/*.md'],
			tasks: ['assemble', 'newer:copy:dist'],
			options: {
				livereload: true
			}
		},

		livereload: {
			options: { livereload: true },
			files: [
				'statix/dist/css/*.css'
			]
		},

		grunticon : {
			files: ['img/src/*.svg', 'img/src/*.png'],
			tasks: [
				'clean:icons',
				'svgmin',
				'grunticon'
			]
		},

		grunt: {
			files: ['_grunt-configs/*.js', 'Gruntfile.js']
		}
	}
}