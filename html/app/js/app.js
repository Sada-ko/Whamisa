// для проверки
$(function () {
    // $('body').fadeOut();
});


// Филл-бокс
$(document).ready(function () {
	(function ($, window, document) {
		$.fn.fillBox = function () {
			this.each(function () {
				var el = $(this),
				src = el.attr('src'),
				parent = el.parent();
				parent.addClass('filled');
				parent.css({
					'background-image': 'url(' + src + ')',
					'background-size': 'cover',
					'background-position': 'center'
//'transition' : 'all 0.1s ease-in-out 0s'
});
				el.hide();
			});
		};
	}(jQuery, window, document));
});

$(document).ready(function () {
	$('.fill-box').fillBox();
});