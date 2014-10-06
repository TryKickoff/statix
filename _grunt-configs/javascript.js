module.exports.tasks = {

	/**
	 * Browserify
	 * https://github.com/jmreidy/grunt-browserify
	 * Grutn task for node-browserify – allows CommonJS-style JS code and packages it for use in the browser
	 */
	browserify: {
		dev: {
			src: ['<%=config.js.srcFile%>'],
			dest: '<%=config.js.distDir%><%=config.js.distFile%>',
			options : {
				debug: true
			}
		},
		prod: {
			src: ['<%=config.js.srcFile%>'],
			dest: '<%=config.js.distDir%><%=config.js.distFile%>',
			options : {
				transform: ['uglifyify']
			}
		}
	},


	/**
	 * JSHint
	 * https://github.com/gruntjs/grunt-contrib-jshint
	 * Manage the options inside .jshintrc file
	 */
	jshint: {
		all: '<%=config.js.fileList%>',
		options: {
			jshintrc: '.jshintrc'
		}
	},


	/**
	 * JSCS
	 * https://github.com/dsheiko/grunt-jscs
	 * Manage the options inside .jscs.json file
	 */
	jscs: {
		src: '<%=config.js.fileList%>',
		options: {
			config: ".jscs.json"
		}
	},

	/**
	 * Custom jQuery builder
	 * Check build numbers at jquery.com
	 */
	jquery: {
		build: {
			options: {
				prefix: "jquery-",
				minify: true
			},
			output: "js/libs/jquery",
			versions: {
				// Add items to the below arrays to remove them from the build
				// Remove everything we don't need from 2.x versions
				//"2.0.3": [ "deprecated", "dimensions", "offset", "wrap"],

				// We can't remove sizzle from 1.x versions, so let's not specify it
				"1.10.2": [ "deprecated"]
			}
		}
	}

};
