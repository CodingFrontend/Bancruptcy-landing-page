//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
	for (let index = 0; index < sliders.length; index++) {
		let slider = sliders[index];
		if (!slider.classList.contains('swiper-bild')) {
			let slider_items = slider.children;
			if (slider_items) {
				for (let index = 0; index < slider_items.length; index++) {
					let el = slider_items[index];
					el.classList.add('swiper-slide');
				}
			}
			let slider_content = slider.innerHTML;
			let slider_wrapper = document.createElement('div');
			slider_wrapper.classList.add('swiper-wrapper');
			slider_wrapper.innerHTML = slider_content;
			slider.innerHTML = '';
			slider.appendChild(slider_wrapper);
			slider.classList.add('swiper-bild');
		}
		if (slider.classList.contains('_gallery')) {
			//slider.data('lightGallery').destroy(true);
		}
	}
	sliders_bild_callback();
}

function sliders_bild_callback(params) { }

if (document.querySelector('.slider-press')) {
	let pressSlider = new Swiper('.slider-press__body', {
		/*
		effect: 'fade',
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
		*/
		observer: true,
		observeParents: true,
		slidesPerView: 3,
		spaceBetween: 0,
		// autoHeight: true,
		speed: 300,
		//touchRatio: 0,
		//simulateTouch: false,
		// loop: false,
		//preloadImages: false,
		//lazy: true,
		// Dotts
		pagination: {
			el: '.controls__progressbar',
			type: 'progressbar',
		},
		// pagination: {
		// 	el: '.controls__pagging',
		// 	type: 'custom',
		// 	renderCustom: function (swiper, current, total) {
		// 		return '<span>0' + current + '</span>' + '<div class="controls__progressbar"></div>' + '<span>0' + total + '</span>';
		// 	}
		// },
		// Arrows
		navigation: {
			nextEl: '.controls__arrow_next',
			prevEl: '.controls__arrow_prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 0,
				autoHeight: true,
			},
			690: {
				slidesPerView: 2,
			},
			991.98: {
				slidesPerView: 3,
			},
		},
		noSwipingClass: 'noswipe'
	});
};
