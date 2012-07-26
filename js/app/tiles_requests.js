/*	Tiles view
 *
 *	Displays all images as tiles. Each tile listens for user click.
 */

// NOTE: xdomainajax is not AMD module, so it don't return anything
define(['amplify', 'xdomainajax'],
function(Amplify, Xdomainajax){

	// define custom request type: xdomainajax
	// temporary workaround for Imgur lack of jsonp or CORS support
	Amplify.request.types.xdomainajax = function(settings) {
		return function(options){
			options.url = settings.url;
			options.type = settings.type;
			jQuery.ajax(options);
		}
	};

	// getTiles request definition
	Amplify.request.define('getTiles', 'xdomainajax', {
			url: 'http://imgur.com/gallery/hot/page/0.json',
			type: 'GET'
		}
	);

})