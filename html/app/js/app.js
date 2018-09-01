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


// OWL CAROUSEL
$('.new-items .owl-carousel').owlCarousel({
	loop:true,
	margin:15,
	// autoplay:true,
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
			items:4
		}
	}
})

$('.owl-carousel.articles-tease').owlCarousel({
	loop:true,
	autoplay:true,
	animateOut: 'fadeOut',
	animateIn: 'fadeIn',
	navText: ["<i class='fal fa-angle-left fa-2x' aria-hidden='true'></i>","<i class='fal fa-angle-right fa-2x' aria-hidden='true'></i>"],
	// nav:true,
	autoplayTimeout:20000,
	items:1,
})

$('.owl-carousel.main-carousel').owlCarousel({
	loop:true,
	autoplay:true,
	navText: ["<i class='fal fa-angle-left fa-2x' aria-hidden='true'></i>","<i class='fal fa-angle-right fa-2x' aria-hidden='true'></i>"],
	nav:true,
	autoplayTimeout:20000,
	items:1,
})

// FORM VALIDATION
// Example starter JavaScript for disabling form submissions if there are invalid fields
$(document).ready(function () {
	(function() {
		'use strict';
		window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
    	form.addEventListener('submit', function(event) {
    		if (form.checkValidity() === false) {
    			event.preventDefault();
    			event.stopPropagation();
    		}
    		form.classList.add('was-validated');
    	}, false);
    });
}, false);
	})();
});