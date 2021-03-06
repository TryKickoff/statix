module.exports.tasks = {

	/**
	* Clean
	* https://github.com/gruntjs/grunt-contrib-clean
	* Clean some files
	*/
	clean: {
		icons: ['<%=config.distDir%>/img/icons', '<%=config.tempDir%>/icons'],
		tempCSS : ['<%=config.tempDir%>/css'],
		all: ['<%= config.statix.dir%>/dist/**/*.html']
	},


	/**
	 * Copy
	 * https://github.com/gruntjs/grunt-contrib-copy
	 * Copy files and folders.
	 */
	copy: {
		modernizr: {
			src: '<%=config.srcDir%>/js/libs/modernizr.min.js',
			dest: '<%=config.distDir%>/js/libs/modernizr.min.js'
		},

		statix: {
			files: [
				{
					expand: true,
					cwd: '<%=config.img.distDir%>',
					src: ['./**/*.*'],
					dest: '<%=config.statix.dir%>/dist/assets/img'
				},
				{
					expand: true,
					cwd: '<%=config.js.distDir%>',
					src: ['./**/*.*'],
					dest: '<%=config.statix.dir%>/dist/assets/js'
				},
				{
					expand: true,
					cwd: './<%=config.css.distDir%>',
					src: ['./*.{css,map}'],
					dest: '<%= config.statix.dir%>/dist/assets/css'
				}
			]
		},
		css: {
			files: [{
				expand: true,
				cwd: './<%=config.css.distDir%>',
				src: ['./*.{css,map}'],
				dest: '<%= config.statix.dir%>/dist/assets/css'
			}]
		},
		img: {
			files: [{
				expand: true,
				cwd: '<%=config.img.distDir%>',
				src: ['./**/*.*'],
				dest: '<%= config.statix.dir%>/dist/assets/img'
			}]
		},
		js: {
			files: [{
				expand: true,
				cwd: '<%=config.js.distDir%>',
				src: ['./**/*.*'],
				dest: '<%= config.statix.dir%>/dist/assets/js'
			}]
		}
	}
};
