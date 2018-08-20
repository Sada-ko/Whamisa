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
// $('.carousel').carousel()

// $('.carousel').carousel({
// 	// interval: 2000000
// })

// OWL-carousel
// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:5
//         }
//     }
// })

$('.new-items .owl-carousel').owlCarousel({
	loop:true,
	margin:15,
	autoplay:true,
	// navContainerClass:"owl-nav",
	// navClass:["carousel-control-prev","carousel-control-next"],	
	navText: ["<i class='fal fa-angle-left fa-2x' aria-hidden='true'></i>","<i class='fal fa-angle-right fa-2x' aria-hidden='true'></i>"],
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

$('.owl-carousel.articles-tease').owlCarousel({
	loop:true,
	// autoplay:true,
	animateOut: 'fadeOut',
    animateIn: 'fadeIn',
	navText: ["<i class='fal fa-angle-left fa-2x' aria-hidden='true'></i>","<i class='fal fa-angle-right fa-2x' aria-hidden='true'></i>"],
	// nav:true,
	autoplayTimeout:20000,
	items:1,
})

$('.owl-carousel.main-carousel').owlCarousel({
	loop:true,
	// autoplay:true,
	navText: ["<i class='fal fa-angle-left fa-2x' aria-hidden='true'></i>","<i class='fal fa-angle-right fa-2x' aria-hidden='true'></i>"],
	nav:true,
	autoplayTimeout:20000,
	items:1,
})