// Fill-Box
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


// Bootstrap Carousel
$('.carousel').carousel()

$('.carousel').carousel({
  interval: 2000000
})

// OWL-carousel
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    responsive:{
        0:{
            items:2
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})