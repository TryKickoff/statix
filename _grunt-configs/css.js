module.exports.tasks = {

	/**
	 * Sass compilation
	 * https://github.com/gruntjs/grunt-contrib-sass
	 * Includes kickoff.scss and kickoff-old-ie.scss by default
	 * Also creates source maps
	 */
	sass: {
		kickoff: {
			options: {
				unixNewlines: true,
				style: 'expanded',
				lineNumbers: false,
				debugInfo : false,
				precision : 8
			},
			files: {
				'statix/dist/assets/css/kickoff.css'       : 'scss/kickoff.scss',
				'statix/dist/assets/css/kickoff-old-ie.css': 'scss/kickoff-old-ie.scss'
			}
		},
		styleguide: {
			options: {
				unixNewlines: true,
				style: 'expanded',
				precision : 8
			},
			files: {
				'statix/dist/assets/css/styleguide.css': 'scss/styleguide.scss'
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
		dist : {
			options: {
				// Task-specific options go here - we are supporting
				// the last 2 browsers, any browsers with >1% market share,
				// and ensuring we support IE7 + 8 with prefixes
				browsers: ['> 5%', 'last 4 versions', 'firefox > 3.6', 'ie > 6'],
				map: true
			},
			files: {
				'statix/dist/assets/css/kickoff.css'       : 'statix/dist/assets/css/kickoff.css',
				'statix/dist/assets/css/kickoff-old-ie.css': 'statix/dist/assets/css/kickoff-old-ie.css'
			}
		},
		styleguide : {
			options: {
				// Task-specific options go here - we are supporting
				// the last 2 browsers, any browsers with >1% market share,
				// and ensuring we support IE7 + 8 with prefixes
				browsers: ['> 5%', 'last 4 versions', 'firefox > 3.6', 'ie > 6'],
				map: false
			},
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
				'css/kickoff.css'       : 'css/kickoff.css',
				'css/kickoff-old-ie.css': 'css/kickoff-old-ie.css'
			},

		}
	}

};
