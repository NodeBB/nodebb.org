$(document).ready(function() {
	var planBeingViewed = 1,
		frames = 15,
		durations = [
			0,
			2800,
			3200,
			3500,
			3600,
			3900,
			4200,
			4250,
			4275,
			4320,
			4410,
			4550,
			4600,
			4620,
			4690
		];

	$(window).scroll(resizeHeader);
	$(window).resize(resizeWindow);
	resizeHeader();
	resizeWindow();

	$('.left-arrow').on('click', scrollPlansLeft);
	$('.right-arrow').on('click', scrollPlansRight);

	setupCanvas();

		
	function scrollPlansLeft() {
		planBeingViewed --;
		if (planBeingViewed < 0) {
			planBeingViewed = 4;
		}

		configureMobilePricing();
	}

	function scrollPlansRight() {
		planBeingViewed ++;
		if (planBeingViewed > 4) {
			planBeingViewed = 0;
		}

		configureMobilePricing();
	}

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
		} else {
			$('.table').removeAttr('style');
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
});