module.exports.tasks = {

	/**
	 * Sass compilation using grunt-sass
	 * https://github.com/gruntjs/grunt-contrib-sass
	 * Includes kickoff.scss and kickoff-old-ie.scss by default
	 */
	sass: {
		kickoff: {
			options: {
				unixNewlines: true,
				style: 'expanded',
				lineNumbers: false,
				debugInfo : false,
				precision : 8,
				loadPath : '<%=config.css.scssDir%>/'
			},
			files: {
				'statix/dist/assets/css/<%=config.css.srcFile%>.css'       : '<%=config.css.scssDir%>/<%=config.css.srcFile%>.scss',
				'statix/dist/assets/css/<%=config.css.srcFile%>-old-ie.css': '<%=config.css.scssDir%>/<%=config.css.srcFile%>-old-ie.scss'
			}
		},
		styleguide: {
			options: {
				unixNewlines: true,
				style: 'compressed',
				precision : 8,
				loadPath : '<%=config.css.scssDir%>/'
			},
			files: {
				'statix/dist/assets/css/styleguide.css': '<%=config.css.scssDir%>/styleguide.scss'
			}
		}
	},


	/**
	 * Autoprefixer
	 * https://github.com/nDmitry/grunt-autoprefixer
	 * https://github.com/ai/autoprefixer
	 * Auto prefixes your CSS using caniuse data
	 */
	autoprefixer: {
		options: {
			// We are supporting the last 2 browsers, any browsers with >1% market share,
			// and ensuring we support IE8+ with prefixes
			browsers: ['> 5%', 'last 4 versions', 'firefox > 3.6', 'ie > 7'],
			map: true
		},

		kickoff: {
			expand: true,
			flatten: true,
			files: {
				'statix/dist/assets/css/<%=config.css.srcFile%>.css'       : 'statix/dist/assets/css/<%=config.css.srcFile%>.css',
				'statix/dist/assets/css/<%=config.css.srcFile%>-old-ie.css': 'statix/dist/assets/css/<%=config.css.srcFile%>-old-ie.css'
			}
		},

		styleguide : {
			files: {
				'statix/dist/assets/css/styleguide.css' : 'statix/dist/assets/css/styleguide.css'
			}
		}
	},


	/**
	 * CSSO
	 * https://github.com/t32k/grunt-csso
	 * Minify CSS files with CSSO
	 */
	csso: {
		dist: {
			options: {
				restructure: false //turns structural optimiations off as can mess up fallbacks http://bem.info/tools/optimizers/csso/description/
			},
			files: {
				'statix/dist/assets/css/<%=config.css.srcFile%>.css'       : 'statix/dist/assets/css/<%=config.css.srcFile%>.css',
				'statix/dist/assets/css/<%=config.css.srcFile%>-old-ie.css': 'statix/dist/assets/css/<%=config.css.srcFile%>-old-ie.css'
			},

		}
	}

};
