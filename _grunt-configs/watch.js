module.exports.tasks = {

	/**
	* Watch
	* https://github.com/gruntjs/grunt-contrib-watch
	* Watches your scss, js etc for changes and compiles them
	*/
	watch: {
		scss: {
			files: ['scss/**/*.scss'],
			tasks: [
				'sass:kickoff',
				'autoprefixer:dist',
				'copy:css'
			]
		},

		js: {
			files: [
				'<%=config.js.fileList%>',
				'Gruntfile.js'
			],
			tasks: [
				'browserify:dev',
				'copy:js'
			]
		},

		assemble : {
			files: ['statix/src/templates/**/*.hbs', 'statix/src/templates/**/*.md'],
			tasks: ['clean', 'assemble', 'newer:copy'],
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
		}
	}
}