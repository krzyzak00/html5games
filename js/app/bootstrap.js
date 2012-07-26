/*	Moblie Imgur Browser (proof of concept)
 *
 * 	HTML part of cross platform application
 *	This should be wrapped with native client and executed in webkit
 *  Native client wrapper should provide data fetching API to deal with
 *	cross-origin resource sharing policy (Imgur don't support jsonp or CORS)
 */

 /*	Application bootstrap - prepare enviroment and run application  */

 /*
 *	Main requirejs config
 *	Set requirejs paths and dependencies for external libraries
 */
require.config({
	baseUrl: 'js/app',
	paths: {
		jquery: '../lib/jquery',
		amplify: '../lib/amplify',
		xdomainajax: '../lib/jquery.xdomainajax',
		mustache: '../lib/mustache',
		text: '../lib/text',

		tpl: 'tpl'
	},
	shim: {
		'xdomainajax': {
			deps: ['jquery'],
			exports: 'xdomainajax'
		},
		'amplify': {
			deps: ['jquery', 'xdomainajax'],
			exports: 'amplify'
		},
	}
})

/* Run application */
require(['jquery', 'app']);