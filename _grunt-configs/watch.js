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
				'compileCSS',
				'clean:tempCSS',
				'copy:css'
			],
			options: {
				interrupt: true,
				spawn: false
			}
		},

		images : {
			files: ['<%=config.img.srcDir%>/**/*.{svg,png,jpg,gif}'],
			tasks: ['imagemin:images'],
			options: {
				interrupt: true
			}
		},

		grunticon : {
			files: ['<%=config.img.grunticonDir%>/**/*.{svg,png,jpg,gif}'],
			tasks: ['icons'],
			options: {
				interrupt: true
			}
		},

		grunt: {
			files: ['_grunt-configs/*.js', 'Gruntfile.js'],
			options: {
				reload: true
			}
		},

		assemble : {
			files: ['<%= config.statix.dir%>/src/templates/**/*.{hbs,md}'],
			tasks: [
				'assemble',
				'newer:copy:statix'
			],
			options: {
				livereload: true
			}
		}
	}
}
