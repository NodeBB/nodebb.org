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
	resizeHeader();


	if ($('.page-product-extensibility').length) {
		setupSly();
	} else if ($('.page-index').length) {
		setupCanvas();
	} else if ($('.page-pricing').length) {
		$(window).resize(resizeWindow);
		resizeWindow();
		$('.left-arrow').on('click', scrollPlansLeft);
		$('.right-arrow').on('click', scrollPlansRight);
	}

	var slideout = new Slideout({
		'panel': document.getElementById('panel'),
		'menu': document.getElementById('menu'),
		'padding': 256,
		'tolerance': 70
	});

	$('#mobile-menu').on('click', function() {
		slideout.toggle();
	});

	$(window).on('resize', function() {
		slideout.close();
	});

	function onOpeningMenu() {
		$('#header').css({
			'top': $('#panel').position().top * -1 + 'px',
			'position': 'absolute'
		});
	}

	slideout.on('beforeopen', onOpeningMenu);
	slideout.on('open', onOpeningMenu);
	slideout.on('translate', onOpeningMenu);

	slideout.on('close', function() {
		$('#header').css({
			'top': '0px',
			'position': 'fixed'
		});
	})

	$('#product-menu-mobile').html($('#product-menu').html());
	$('#navigation-menu-mobile').html($('#navigation-menu').html());
		

	function setupSly() {
		var $frame = $('.frame');
		var $wrap  = $frame.parent();

		$frame.sly({
			horizontal: 1,
			itemNav: 'centered',
			smart: 1,
			activateMiddle: 1,
			activateOn: 'click',
			mouseDragging: 1,
			touchDragging: 1,
			releaseSwing: 1,
			startAt: 0,
			scrollBar: $wrap.find('.scrollbar'),
			scrollBy: 1,
			speed: 300,
			elasticBounds: 1,
			dragHandle: 1,
			dynamicHandle: 1,
			clickBar: 1
		});
	}
	
	function scrollPlansLeft() {
		planBeingViewed --;
		if (planBeingViewed < 0) {
			planBeingViewed = 3;
		}

		configureMobilePricing();
	}

	function scrollPlansRight() {
		planBeingViewed ++;
		if (planBeingViewed > 3) {
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
		if ($(window).width() < 980) {
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