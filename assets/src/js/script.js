/**
 * Project Name: Kickoff
 * @description The Kickoff boilerplate js file
 * @author The Kickoff team
 *
 * Need help using JSDoc? Find out more at http://usejsdoc.org/
 */

'use-strict';

// their code e.g. npm modules
import ready from 'lite-ready'; // https://github.com/nicbell/liteready
import $$ from 'double-dollar'; // https://github.com/mrmartineau/double-dollar
import svg4everybody from 'svg4everybody'; // https://github.com/jonathantneal/svg4everybody

// Global libs that don't return a value
import 'console';
import 'kickoff-welcome.js'; // The Kickoff message in the js console. Remove it if you like :)

// our code
// this is a test, uncomment the line below to try it
// import moduleTest from './modules/module-test';

window.$$ = $$; // add double-dollar to global scope

// DOM ready code goes in here
ready(() => {
	// moduleTest(); // this is a test, uncomment this line to try it
	svg4everybody();
});
