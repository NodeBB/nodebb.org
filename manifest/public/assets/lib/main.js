$(document).ready(function() {
	setupHeroAnimation();
});



function setupHeroAnimation() {
	var rotate, bounce;

	setInterval(function() {
		rotate = rotate || $('.rotate');
		bounce = bounce || $('.bounce');

		rotate.removeClass('rotate');
		bounce.removeClass('bounce');

		setTimeout(function() {
			rotate.addClass('rotate');
			bounce.addClass('bounce');
		}, 10);
	}, 3500);
}