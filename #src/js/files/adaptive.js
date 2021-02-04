$(window).resize(function (event) {
	adaptive_function();
});
function adaptive_topHeader(w, h) {
	let sliderItems = $('.slider-press__items');
	let swiperWrapper = $('.swiper-wrapper');
	let sliderItem = $('.slider-press__items > li');

	if (w < 767.98) {
		if (!sliderItem.hasClass('done')) {

		}
	} else {

	};
}

function adaptive_function() {
	let w = $(window).outerWidth();
	let h = $(window).outerHeight();
	adaptive_topHeader(w, h);
}

adaptive_function();

