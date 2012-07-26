/*	Build config
 *
 *	Deploing application is very simple with requirejs :)
 *
 *	Make sure you have node.js installed, cd to directory with this file, r.js file
 *	and simply run: node.js r.js -o build-config.js
 */

({
	baseUrl: 'app',
	mainConfigFile: 'app/bootstrap.js',
	name: 'bootstrap',
	out: 'app-min.js'
})