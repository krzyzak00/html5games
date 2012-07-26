/*	Single image view (tile zoom)
 *
 *	Displays single zoomed image and listens for user click
 */

define(['amplify', 'mustache', 'orientation', 'text!tpl/zoom.html'],
function(Amplify, Mustache, Orientation,  ZoomTpl){

	var t = this;
	var _$node;

	var currentImg = {},
		maxSize = {
			width: 800,
			height: 800
		};

	function init() {

		_$node = $(Mustache.render(ZoomTpl, ''));

		Orientation.startTracking();
		maxSize = Orientation.getScreenSize();

		Amplify.subscribe('tile/zoomin', repaint)
		Amplify.subscribe('screen/resize', setMaxSize);

	}

	var hide = function() {
		detachListeners();
		_$node.addClass('zoomOut').removeClass('zoomIn');
	}

	function setMaxSize(size) {

		maxSize = size;

		if (_$node.hasClass('zoomIn'))
			repaint(currentImg.src, currentImg.title);
	}

	function attachListeners() {
		_$node.click(hide);
	}

	function detachListeners() {
		_$node.unbind('click', hide);
	}

	function repaint(image_src, title) {

		currentImg = {
			src: image_src,
			title: title
		};

		var image_src = image_src.replace('http://i.imgur.com/', '').replace('b.jpg', ''),
			data = {
				src: image_src,
				title: title,
				width: maxSize.width * 0.9
			};

		// ugly repaint hack
		// TODO: optimize repaint
		_$node.html($(Mustache.render(ZoomTpl, data)).html());
		_$node.addClass('zoomIn').removeClass('zoomOut');

		attachListeners();
	}

	function getNode() {
		return _$node;
	}

	init();

	return {
		getNode: getNode
	}
})