![](http://i.imgur.com/kwr16tO.jpg)

# Kickoff Statix
Kickoff Statix aims to make the process of creating static HTML templates quick and easy.

It is primarily a simple setup of Assemble, a static site generator, integrated with our minimal front-end framework, Kickoff along with a few handy Grunt setup tasks.

Combined, this gives you a framework that streamlines the creation of much more maintainable, flexible front-end templates with virtually no project setup required.

Should you wish to rip out the CSS (or SCSS) and JS and replace it with a structure or framework you feel more comfortable with, that is also very easy with small changes to the project setup.


## Features

* A quick and flexible setup to help when developing static HTML templates
* Get up and running writing templated web pages in a matter of minutes.  No config to get in your way unless you want to build in more complex Assemble functionality
* A setup based on [Assemble](http://assemble.io/), and [Grunt](http://gruntjs.com/), it gives you the power of using a templating language (such as Handlebars), and the flexibility of being able to write content using Markdown.
* Integrated with [Kickoff](http://tmwagency.github.io/kickoff/) - a minimal front-end framework developed at [TMW](http://www.tmw.co.uk/)

---

### Download from:

* Github: [.zip](https://github.com/tmwagency/kickoff-statix/archive/master.zip)
* Git clone: `https://github.com/tmwagency/kickoff-statix.git your-project-folder`
* SVN checkout: `svn checkout https://github.com/tmwagency/kickoff-statix your-project-folder`

---

## Getting started with Statix

1. Download or clone the git repo. To clone run `git clone https://github.com/tmwagency/kickoff-statix.git your-project-folder`
2. Ensure you have Sass, Node and Grunt installed, as Statix needs these dependencies to operate.
3. Install the project dependencies by running `npm install` from the root of the directory.
4. Run `grunt serve`.  This will build your project for the first time and use the connect module to start a static web server for your templates.
5. Build your templates using Statix!

Compiled template files are created in the `/dist` folder at the root of the project, and this can be changed in the Gruntfile if you would rather compile elsewhere.

Source maps are also created for both the Javascript and Sass. Javascript is compiled to the `/js/dist` and Sass is compiled to the `/css` folder.


## Further documentation and demos

Kickoff Statix is built by combining two tools; Kickoff and Assemble.  The documentation for both of these should be looked at for expanding on the initial setup of Statix.

*  Visit [tmwagency.github.io/kickoff/](http://tmwagency.github.io/kickoff/) for all demos and documentation for Kickoff
*  and [assemble.io/docs/](http://assemble.io/docs/) for Assemble documentation.

---

## Installing Statix dependencies

[Ruby](https://www.ruby-lang.org/en/) v2 is needed to use Statix. Update using [rvm](http://rvm.io/) or [brew](http://brew.sh) (if you use a Mac), Windows users can install Ruby via [the Windows installer](http://rubyinstaller.org/downloads/), and Linux users can install it via their package manager, then install the packages below:

* Install Sass globally - `gem install sass --pre`
* Install Node from [nodejs.org](http://nodejs.org/)
* Install Grunt CLI - `npm install -g grunt-cli`

Once these dependencies are installed, see 'Getting started with Statix' for instructions on runnign your project.

---

## Using your own front-end framework

Don't want to use Kickoff?  We won't be offended.

Statix is setup so that you can do this very easily.


### To replace the SCSS

Delete the files in the /scss folder, replacing them with your framework of choice.

Next, go into the `Gruntfile.js` in the root of the project and change all references of `kickoff.scss` and `kickoff.css` to whatever you have decided to call your main SCSS file.

Finally, change the reference to the compiled CSS file in the `html_start.hbs` in `src/templates/includes`

### To replace the JS

Delete the files in the /js folder, replacing with your own structure.

In the `Gruntfile.js` either change the references to your own JS files, or if you would like to add in your own JS grunt helpers – such as browserify or RequireJS – then add this in as you usually would to the project.

### Replacing anything else…

Statix uses Grunt and so if you know Grunt, you can change pretty much any aspect of the config as you would any other Grunt project.  If you don't like certain default config options of Statix, fork the repo and change them!


---

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request

---

## Credits

Developed by [Ashley Nolan](https://github.com/AshNolan_) & [Zander Martineau](https://github.com/mrmartineau).

Uses the static site generator [Assemble](https://github.com/assemble/assemble), which is developed and maintained by [Jon Schlinkert](https://github.com/jonschlinkert) and [Brian Woodward](github/doowb).

If you're using Kickoff Statix we'd love to hear about it; please e-mail us at labs@tmw.co.uk

[![devDependency Status](https://david-dm.org/tmwagency/kickoff/dev-status.png)](https://david-dm.org/tmwagency/kickoff#info=devDependencies) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/tmwagency/kickoff/trend.png)](https://bitdeli.com/free "Bitdeli Badge") [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)


