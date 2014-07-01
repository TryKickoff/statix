module.exports.tasks = {

	/**
	* Clean
	* https://github.com/gruntjs/grunt-contrib-clean
	* Clean some files
	*/
	clean: {
		icons: ['img/icons'],
		all: ['dist/**/*.html']
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


}
