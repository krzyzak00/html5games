/*	Oriantation module provides screen/resize event
 *	(fe. detects screen orientation change)
 *
 *	Not needed at this point
 */

define(['amplify'], function(amplify){

	function startTracking(){

		// android devices
		window.addEventListener('orientationchange', function(){

			amplify.publish('/screen/resize', {
				width: window.innerWidth,
				height: window.innerHeight
			});

		}, true);

		// regular browsers
		window.addEventListener('resize', function(e){

			amplify.publish('screen/resize', {
				width: window.innerWidth,
				height: window.innerHeight
			});

		}, true);

		// TODO: add iOS support

		amplify.publish('screen/resize', {
			width: window.innerWidth,
			height: window.innerHeight
		});
	}

	function getScreenSize() {

		return {
			width: window.innerWidth,
			height: window.innerHeight
		}
	}

	return {
		startTracking: startTracking,
		getScreenSize: getScreenSize
	}
})