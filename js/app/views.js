/*	Main window views module
 *
 *	All application modules that have own view are managed from here
 *	Views module holds list of all modules and can repaint them
 */

define(['amplify', 'tiles_view', 'tile_view'],
function(Amplify, TilesView, TileView){

	var t = this;

	// TODO: fix views module main node
	// this is dirty hack, all nodes should come from templates
	var _$node = $('<div id="viewsList">');

	// array of application views (tiles and tile zoom for now)
	var _views = [];

	function init() {

		_views.push(TilesView);
		_views.push(TileView);

		Amplify.subscribe('view/update', updateView);

		for (var i = 0, l = _views.length; i < l; i++) {

			var v_node = _views[i].getNode();
			_$node.append(_views[i].getNode());
		}
	}

	/*	Repaint one of application views (tiles or single tile for now)
	 *
	 *	@param {integer} view_id
	 */
	function updateView(view_id) {

		for (var i = 0, l = _views.length; i < l; i++)
			if (_views[i].getId() == view_id)
				repaintView(_views[i]);
	}

	/*	Repaint one of application views (tiles or single tile for now)
	 *
	 *	@param {object} module
	 */
	function repaintView(view) {

		var v_id = view.getId(),
			v_node = view.getNode();

		_$node.find('#' + v_id).html(v_node);
	}

	/*	Repaint all application views
	 */
	function repaintViews() {

		for (var i = 0, l = _views.length; i < l; i++)
			repaintView(_views[i]);
	}

	function getNode() {

		return _$node;
	}

	init();

	return {
		getNode: getNode
	}

})