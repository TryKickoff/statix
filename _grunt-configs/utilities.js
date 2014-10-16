module.exports.tasks = {

	/**
	* Clean
	* https://github.com/gruntjs/grunt-contrib-clean
	* Clean some files
	*/
	clean: {
		icons: ['img/icons'],
		all: ['statix/dist/**/*.html']
	},


	/**
	* Shell
	* https://github.com/sindresorhus/grunt-shell
	* Run shell commands
	*/
	shell: {
		bowerinstall: {
			command: 'bower install'
		}
	},


	/**
	 * Copy
	 * https://github.com/gruntjs/grunt-contrib-copy
	 * Copy files and folders.
	 */
	copy: {
		dist: {
			files: [
				{ expand: true, cwd: './img', src: ['./**/*.*'], dest: 'statix/dist/assets/img' },
				{ expand: true, cwd: './fonts', src: ['./**/*.*'], dest: 'statix/dist/assets/fonts' }
			]
		},
		img: {
			files: [
				{ expand: true, cwd: './img', src: ['./**/*.*'], dest: 'statix/dist/assets/img' }
			]
		},
		fonts: {
			files: [
				{ expand: true, cwd: './fonts', src: ['./**/*.*'], dest: 'statix/dist/assets/fonts' }
			]
		}
	},


	/**
	 * Grunt Photobox
	 * https://github.com/stefanjudis/grunt-photoBox
	 * Visual regression testing tool
	 */
	photobox: {
		task: {
			options: {
				screenSizes : '<%=config.testing.visual.sizes%>',
				urls        : '<%=config.testing.visual.urls%>'
			}
		}
	}

};
