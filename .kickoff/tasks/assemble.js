///////////////////////////////////////////////////////////
// Task Dependencies

const gulp        = require('gulp');
const path        = require("path");
const debug       = require('gulp-debug');
const plumber     = require('gulp-plumber');
const config      = require('../config');

const assemble    = require('assemble');
const expand      = require('expand')();
const yaml        = require('js-yaml');
const extname     = require('gulp-extname');

///////////////////////////////////////////////////////////

const app = assemble();
const statixRoot = config.statix.dir;
const statixRootHelpers = '../../' + config.statix.dir;
const statixSrcDir = statixRoot + config.statix.srcDir;
const statixDistDir = statixRoot + config.statix.distDir;


app.helper('is', require(statixRootHelpers + config.statix.srcDir + config.statix.helpersDir + '/helper-is.js'));
app.helper('exists', require(statixRootHelpers + config.statix.srcDir + config.statix.helpersDir + '/helper-exists.js'));
app.helper('markdown', require('helper-markdown'));
app.helper('md', require('helper-md'));

// to help with parsing yml data files properly
app.dataLoader('yml', function(str, fp) {
	return yaml.safeLoad(str);
});

gulp.task('assemble', () => {

		//init assemble plugins
		app.enable('debugEngine');
		app.layouts(statixSrcDir + config.statix.templateDir + '/layouts/*.{md,hbs}');
		app.partials(statixSrcDir + config.statix.templateDir + '/partials/**/*.{md,hbs}');
		app.data(statixSrcDir + config.statix.dataDir + '/*.{json,yml}');
		app.data('./package.json', { namespace: true });
		app.option('layout', 'default');

		app.data({
				baseUrl: (config.statix.isProd ? '' : '')
		});

		// pre-render any data <%= variable %> declarations in the yml front-end matter
		app.preRender(/\.(hbs|html)$/, function (view, next) {
		  view.data = expand(view.data, app.cache.data);
		  next();
		});

		return app.src( statixSrcDir + config.statix.templateDir + '/pages/**/*.{md,hbs}' )
						.pipe( plumber( config.gulp.onError ) ) // stops watch from breaking on error
						.pipe( debug() )
						.pipe( app.renderFile() )
						.pipe( extname() )
						.pipe( app.dest( statixDistDir ) );

});


gulp.task('assemble:prod', function () {

		//ovewrite config vars to act like a production task as that is what is being requested
		config.statix.isProd = true;
		gulp.start('assemble');

});
