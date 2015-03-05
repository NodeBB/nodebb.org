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

	setupCanvas();
});


var frames = 15;
var durations = [
	0,
	3300,
	3700,
	4000,
	4100,
	4400,
	4700,
	4750,
	4775,
	4820,
	4910,
	5050,
	5051,
	5080,
	5120
]

function setupCanvas() {
	loadImages(function() {
		for (var i = 1; i <= frames; i++) {
			(function(i) {
				setTimeout(function() {
					$('.frame' + i).addClass('phaseIn rubberBand animated');
					if (i === 1) {
						$('.hero-signup span').addClass('phaseIn');
					} else if (i === frames) {
						$('.hero-signup a').addClass('phaseIn');
					}
				}, durations[i - 1] / 1.5);
			}(i));
		}
	});
}

function loadImages(cb) {
	var loaded = 0;
	function loadFinish() {
		loaded++;
		if (loaded === frames) {
			cb();
		}
	}

	for (var i = 1; i <= frames; i++) {
		var img = document.createElement('img');
		img.onload = loadFinish;
		img.src = 'assets/animation/frames/frame' + i + '.gif';
		img.className = 'frame frame' + i;
		$('#canvas').append(img);
	}

	$('#canvas img').attr('width', '100%');
}


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