/*	Main window title bar module
 *
 *	This can be used to add global title bar to app
 */

define(function(){

	var t = this;
	var _node;

	function init() {

	}

	function getNode() {

		return _node;
	}

	init();

	return {
		getNode: getNode
	}

});