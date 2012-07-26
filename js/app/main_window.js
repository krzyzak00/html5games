/*	Main window module
 *
 *	Application main window holds global title bar and footer bar modules
 *	and application view area module (this is where user modules are)
 */
define(['amplify', 'main_top_bar', 'main_bottom_bar', 'views', 'text!tpl/main_window.html'],
function(Amplify, MainTopBar, MainBottomBar, Views, MainWindowTpl) {

	var t = this;
	var _$node;	// jQ object that holds main window DOM node

	function init() {

		// repaint main window areas event handlers
		Amplify.subscribe('main_top_bar/update', repaintMainTopBar);
		Amplify.subscribe('views/update', repaintViews);
		Amplify.subscribe('main_bottom_bar/update', repaintMainBottomBar);

		_$node = $(MainWindowTpl);

		repaintMainTopBar(MainTopBar.getNode());
		repaintViews(Views.getNode());
		repaintMainBottomBar(MainBottomBar.getNode());
	}

	function repaintMainTopBar(node) {

		// TODO: use classes instead of id
		_$node.find('#mainTopBar').html(node);
	}

	function repaintViews(node) {

		// TODO: use classes instead of id
		_$node.find('#views').html(node);
	}

	function repaintMainBottomBar(node) {

		// TODO: use classes instead of id
		_$node.find('#mainBottomBar').html(node);
	}

	function show() {

		$('body').append(_$node);
	}

	init();

	return {
		show: show
	}

})