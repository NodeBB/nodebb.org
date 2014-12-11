$(document).ready(function() {
	//setupHeroAnimation();
	$(window).scroll(resizeHeader);
	resizeHeader();
});


function resizeHeader() {
	if ($(window).scrollTop() < 50) {
		$('header').removeClass('offTop');
	} else {
		$('header').addClass('offTop');
	}
}


function setupHeroAnimation() {
	var rotate, bounce, count = 0;

	setInterval(function() {
		rotate = rotate || $('.rotate');
		bounce = bounce || $('.bounce');

		rotate.removeClass('rotate');
		bounce.removeClass('bounce');

		setTimeout(function() {
			rotate.addClass('rotate');
			bounce.addClass('bounce');

			setTimeout(function() {
				$('.hero').addClass('loaded');
			}, 500);
		}, 10);
	}, 750);
}