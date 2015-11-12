![](http://i.imgur.com/ACbqfMq.jpg)

[Statix](https://github.com/TryKickoff/statix) makes creating and working with static HTML templates quick and easy.

## Why do I need Statix in my life?

Have you ever wanted the power of reusing snippets in your HTML but don’t know where to start?

Do you want a good base front-end structure for your project without throwing the whole of Bootstrap it?

Statix has your back.


---

## Features

Here are some of the simple problems that Statix helps you solve:

### Code snippets

 Statix leverages Assemble to give you the ability to write a snippet of HTML once and then include it across multiple HTML files.

 Editing a navigation link across 10 static HTML pages?  No problem.  Want to change a piece of footer text across the whole of your site templates?  Easy!

 Simply manage one code snippet and include it wherever you want it to appear in each HTML template.


### Project Structure

Statix uses Kickoff and Grunt to give you a minimal starting point for your front-end projects.  Just enough structure – no extra bloat.

### Write content in Markdown

One of the biggest pains in the ass is having to write content for static sites or templates in HTML.

Statix brings together the power of using a templating language (such as Handlebars), with the flexibility of being able to write content using [Markdown](http://daringfireball.net/projects/markdown/).

This means that for small site builds (ones that don’t need a CMS) content editors can update a much more readable markdown file, rather than dig into HTML syntax.


### Fast starting point

Statix gives you a great base to get up and running as quickly as possible.  Whether templating a full site or just spinning up a prototype, Statix tries to get out of your way so you can start coding.

There’s no complicated config to mess around with before you start.  Once installed, simply typing `grunt serve` into the terminal will spin up a local server that you can see your project change in realtime as you edit it.


### Extensibility

Statix can be extended as much or as little as you like.

The base setup of Statix only utilises a very small amount of Assemble’s features. If you want to use it’s more powerful templating functionality then you can extend this in the usual way, as you would if you were using Assemble on it’s own without the Statix framework.


---

## What’s under the hood

Statix is essentially a simple setup of [Assemble](http://assemble.io/), a powerful static site generator, combined with [Kickoff](http://trykickoff.github.io/kickoff/), a minimal front-end base framework, all tied together with a few handy [Grunt](http://gruntjs.com/) setup tasks.

Collectively, this gives you a framework that streamlines the creation of maintainable, flexible HTML templates with virtually no project setup required.

Should you wish to rip out the CSS (or SCSS) and JS and replace it with a structure or framework you feel more comfortable with (such as Bootstrap), that is also very simple with a couple of small changes to the project setup.



---

## Download Statix

* Github: [.zip](https://github.com/TryKickoff/statix/archive/master.zip)
* Git clone: `https://github.com/TryKickoff/statix.git your-project-folder`
* SVN checkout: `svn checkout https://github.com/TryKickoff/statix your-project-folder`

---

## Getting started with Statix

1. Download or clone the git repo. To clone run `git clone https://github.com/TryKickoff/statix.git your-project-folder`
2. Ensure you have [Sass, Node and Grunt installed](#dependencies), as Statix needs these dependencies to operate.
3. Install the project dependencies by running `npm install` from the root of the directory.
4. Run `grunt serve`.  This will build your project for the first time and use the connect module to start a static web server for your templates.
5. Build your templates using Statix!

Compiled template files are created in the `/dist` folder at the root of the project, and this can be changed in the Gruntfile if you would rather compile elsewhere.

Source maps are also created for both the Javascript and Sass. Javascript is compiled to the `/js/dist` and Sass is compiled to the `/css` folder.


---

<div id="dependencies"></div>

## Installing Statix dependencies

* Install Node from [nodejs.org](http://nodejs.org/)
* Install Grunt CLI - `npm install -g grunt-cli`

Once these dependencies are installed, see 'Getting started with Statix' for instructions on running your project.


---

## Further documentation and demos

Statix is a combination of three tools; [Assemble](http://assemble.io/), [Kickoff](http://trykickoff.github.io/kickoff/) and [Grunt](http://gruntjs.com/).  The documentation for these tools should be looked at for extending the base setup of Statix.

*  See the [Kickoff documentation](http://trykickoff.github.io/kickoff/) for all demos and information relating to Kickoff
*  Check out the [Assemble documentation](http://assemble.io/docs/) for more information on Assemble.
* Read the excellent [Getting started guide](http://gruntjs.com/getting-started) to make a start with Grunt.


---

## Using your own front-end framework

Don't want to use Kickoff?

That’s cool – Statix has been built so the you can do this very easily.


### To replace the SCSS

Delete the files in the /assets/src/scss folder, replacing them with your framework of choice.

Next, go to `/_grunt-configs/config.js` in the root of the project and change the name of the compiled `distFile` to whatever you want to.

Finally, change the reference to the compiled CSS file in the `html_start.hbs` in `statix/src/templates/includes`

### To replace the JS

Delete the files in the `/js` folder, replacing them with your own structure.

Then, in `/_grunt-configs/javascript.js` either change the references to your own JS files, or if you would like to add in your own JS grunt helpers – such as browserify or RequireJS – then add this in as you usually would as a task in this config file.

### Replacing anything else…

Statix uses Grunt to take care of simple tasks like minification and concatenation.

If you know Grunt yourself, you can change pretty much any aspect of the config as you would any other Grunt project.  If you don't like certain default config options of Statix, fork the repo and change them!


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

Uses the excellent static site generator [Assemble](https://github.com/assemble/assemble), which is developed and maintained by [Jon Schlinkert](https://github.com/jonschlinkert) and [Brian Woodward](github/doowb).

If you're using Statix we'd love to hear about it; give us a shout on Twitter, or [email us](mailto:anolan@tmw.co.uk) and let us know how you’re using it.


[![devDependency Status](https://david-dm.org/TryKickoff/kickoff/dev-status.png)](https://david-dm.org/TryKickoff/kickoff#info=devDependencies) [![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/TryKickoff/kickoff/trend.png)](https://bitdeli.com/free "Bitdeli Badge") [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)


