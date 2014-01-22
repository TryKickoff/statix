![](http://i.imgur.com/kwr16tO.jpg)

# Kickoff Statix

Kickoff Statix aims to make the process of creating static HTML templates quick and easy.

It is primarily a simple setup of [Assemble](https://github.com/assemble/assemble), a static site generator, integrated with our minimal front-end framework, [Kickoff](http://tmwagency.github.io/kickoff/) and a few handy [Grunt](http://gruntjs.com/) setup tasks.

Combined, this gives you a framework that allows the creation of much more maintainable, flexible front-end templates with virtually no setup required.

Should you wish to rip out the CSS (or SCSS) and JS and replace it with a structure or framework you feel more comfortable with, that is also very easy with small changes to the project setup.


### Credits

Developed by [Ashley Nolan](https://github.com/dragongraphics) & [Zander Martineau](https://github.com/mrmartineau).

Uses the static site generator [Assemble](https://github.com/assemble/assemble), which is developed and maintained by [Jon Schlinkert](https://github.com/jonschlinkert) and [Brian Woodward](github/doowb).

If you're using Kickoff Statix we'd love to hear about it; please e-mail us at labs@tmw.co.uk

[![devDependency Status](https://david-dm.org/tmwagency/kickoff/dev-status.png)](https://david-dm.org/tmwagency/kickoff#info=devDependencies) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/tmwagency/kickoff/trend.png)](https://bitdeli.com/free "Bitdeli Badge") [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)



## Features

* A quick and flexible setup to help when developing static HTML templates
* Get up and running writing templated web pages in a matter of minutes.  No config to get in your way unless you want to build in more complex Assemble functionality
* A setup based on [Assemble](http://assemble.io/), and [Grunt](http://gruntjs.com/), it gives you the power of using a templating language (such as Handlebars), and the flexibility of being able to write content using Markdown.
* Integrated with [Kickoff](http://tmwagency.github.io/kickoff/) - a minimal front-end framework developed at [TMW](http://www.tmw.co.uk/)


## Demos and documentation
Please visit [tmwagency.github.io/kickoff/](http://tmwagency.github.io/kickoff/) for all demos and documentation for Kickoff, or [assemble.io/docs/](http://assemble.io/docs/) for Assemble documentation.

## Using Grunt
* Install Node from [nodejs.org](http://nodejs.org/)
* Install Grunt CLI - `npm install -g grunt-cli`
* Install Sass globally - `sudo gem install sass --pre`. [Ruby](https://www.ruby-lang.org/en/) v2 is needed. Update using [rvm](http://rvm.io/), [brew](http://brew.sh) (if you use a Mac) or from [ruby-lang.org/en/downloads/](https://www.ruby-lang.org/en/downloads/) then install the packages below
* Navigate (`cd`) to your project directory and run `npm install` which will install all Grunt's dependencies
* Run `grunt watch` or `grunt serve` (if you want to create a simple local server) to watch for changes and compile Sass/Javascript

When using Grunt with Kickoff Statix, source maps are created for both the Javascript and Sass. Javascript is compiled to the `/js/dist` and Sass is compiled to the '/css' folder.

## Using Git?
Kickoff's [.gitignore](https://github.com/tmwagency/kickoff/blob/master/.gitignore#L30) file ignores the `/dist` folder by default. You will want to uncomment this line if you are **not** compiling these on the server.

## Yeoman generator
There is also a Yeoman generator for Kickoff, visit [tmwagency.github.io/kickoff/docs/yeoman.html](http://tmwagency.github.io/kickoff/docs/yeoman.html) for more info.


## Using your own framework

Don't want to use Kickoff?  We won't be offended.

Statix is setup so that you can do this very easily.


### To replace the SCSS
Delete the files in the /scss folder, replacing them with your framework of choice.

Next, go into the `Gruntfile.js` in the root of the project and change all references of `kickoff.scss` and `kickoff.css` to whatever you have decided to call your main SCSS file.

Finally, change the reference to the compiled CSS file in the `html_start.hbs` in `src/templates/includes`

### To replace the JS
Delete the files in the /js folder, replacing with your own structure.

In the `Gruntfile.js` either change the references to your own JS files, or if you would like to add in your own JS grunt helpers – such as browserify or RequireJS – then add this in as you usually would to the project.


## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request


