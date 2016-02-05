module.exports.tasks = {

	/**
	 * grunt-contrib-imagemin
	 * https://github.com/gruntjs/grunt-contrib-imagemin
	 * Minify PNG, SVG, gif & JPEG images
	 */
	imagemin: {
		images: {
			files: [{
				expand: true,
				cwd: '<%=config.img.srcDir%>/',
				src: ['**/*.{svg,png,jpg,gif}'],
				dest: '<%=config.img.distDir%>'
			}]
		}
	}
};
