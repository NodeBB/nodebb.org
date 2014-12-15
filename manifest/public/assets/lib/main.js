var planBeingViewed = 1;

$(document).ready(function() {
	//setupHeroAnimation();
	$(window).scroll(resizeHeader);
	$(window).resize(resizeWindow);
	resizeHeader();
	resizeWindow();

	$('.left-arrow').on('click', function() {
		planBeingViewed --;
		if (planBeingViewed < 0) {
			planBeingViewed = 4;
		}

		configureMobilePricing();
	});

	$('.right-arrow').on('click', function() {
		planBeingViewed ++;
		if (planBeingViewed > 4) {
			planBeingViewed = 0;
		}

		configureMobilePricing();
	});
});


function resizeHeader() {
	if ($(window).scrollTop() < 50) {
		$('header').removeClass('offTop');
	} else {
		$('header').addClass('offTop');
	}
}

function resizeWindow() {
	if ($(window).width() < 768) {
		configureMobilePricing();
	}
}

function configureMobilePricing() {
	var plan = $('.pricing .table ul').eq(planBeingViewed),
		windowWidth = $(window).width(),
		planWidth = plan.width(),
		offset = planBeingViewed === 1 ? 15 : 0,
		x;

	var totalWidth = 0;
	$('.pricing .table ul').slice(0,planBeingViewed).each(function() {
		totalWidth += $(this).width();
	});

	x = - totalWidth + (windowWidth/2) - (planWidth / 2) - offset;
	$('.table').css({
		'transform': 'translateX(' + x + 'px)'
	});
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