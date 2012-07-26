/*	Tiles view
 *
 *	Displays all images as tiles. Each tile listens for user click.
 */

define(['amplify', 'mustache', 'tiles_requests', 'text!tpl/tiles.html'],
function(Amplify, Mustache, TilesRequests, TilesTpl){

	var t = this;
	var _$node;

	var tiles;

	function init() {

		_$node = $(Mustache.render(TilesTpl, {}));

		getTiles();
	}

	var onImgClick = function(e) {

		e.preventDefault();
		e.stopPropagation();

		Amplify.publish('tile/zoomin', e.target.src, e.target.title);
	}

	function getTiles() {

		Amplify.request('getTiles', function(resp) {

			var data, imgs = [];

			if (resp && resp.responseText)
				try {
					resp = $.parseJSON($(resp.responseText).text().trim());
				} catch(e) {
					data = [];
				}

			tiles = resp.gallery;

			repaint();
		});
	}

	function repaint() {

		detachListeners();

		// ugly repaint hack
		// TODO: optimize repaint
		_$node.html($(Mustache.render(TilesTpl, {
			tiles: tiles
		})).html());

		attachListeners();
	}

	function attachListeners() {

		_$node.find('img').click(onImgClick);
	}

	function detachListeners() {

		_$node.find('img').unbind('click', onImgClick);
	}

	function getNode() {

		return _$node;
	}

	init();

	return {
		getNode: getNode
	}
})