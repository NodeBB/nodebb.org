$(document).ready(function () {
	var Contact = {
		els: {
			toggleEl: $('.contact-toggle'),
			modalEl: $('.contact-modal'),
			wrapperEl: $('.contact-modal-wrapper'),
			overlayEl: $('.contact-overlay'),
			formEl: $('.contact-modal form'),
			closeEl: $('.contact-modal .close'),
		},
		open: false,
	};

	Contact.init = function () {
		// Fancy label handling
		Contact.els.modalEl.find('form label+input, form label+textarea')
			.on('focus', function () {
				$(this).siblings('label').toggleClass('visible', true);
			})
			.on('blur', function () {
				if (!$(this).val().length) {
					$(this).siblings('label').toggleClass('visible', false);
				}
			});

		Contact.els.toggleEl.on('click', Contact.showModal);
		$('.header-contact-toggle').on('click', Contact.showModal);
		Contact.els.overlayEl.on('click', Contact.hideModal);
		Contact.els.closeEl.on('click', Contact.hideModal);
		Contact.els.modalEl.find('button[data-type]').on('click', Contact.showForm);
		Contact.els.formEl.find('.submit').on('click', Contact.submit);
		Contact.els.formEl.find('.reset').on('click', Contact.showForm);

		$(window).on('unload', function () {
			if (Contact.open) {
				ga('ComboTracker.send', {
					hitType: 'event',
					eventCategory: 'Contact Form',
					eventAction: 'close',
					transport: 'beacon',
				});
			}
		});
	};

	Contact.showModal = function () {
		Contact.els.overlayEl.toggleClass('open', true);
		Contact.els.toggleEl.toggleClass('open', true);
		Contact.els.wrapperEl.toggleClass('open', true);
		$('body').toggleClass('modal-open', true);

		ga('ComboTracker.send', 'event', 'Contact Form', 'open');
		Contact.open = true;
	};


	Contact.hideModal = function () {
		Contact.els.overlayEl.toggleClass('open', false);
		Contact.els.toggleEl.toggleClass('open', false);
		Contact.els.wrapperEl.toggleClass('open', false);
		$('body').toggleClass('modal-open', false);

		ga('ComboTracker.send', 'event', 'Contact Form', 'close');
		Contact.open = false;
	};

	Contact.submit = function (e) {
		e.preventDefault();
		var emailEl = Contact.els.formEl.find('#email');

		// Check for a valid email
		emailEl.toggleClass('invalid', false);
		if (!/^.+@.+$/.test(emailEl.val())) {
			emailEl.toggleClass('invalid', true);
			return false;
		}

		// Disable all buttons
		$(this).html('<span class="spinner"></span>');
		Contact.els.modalEl.find('button').prop('disabled', true);

		// Re-enable reset button
		Contact.els.modalEl.find('button.reset').prop('disabled', false);

		var successEl = Contact.els.formEl.find('> div:nth-child(3)');
		var failureEl = Contact.els.formEl.find('> div:nth-child(4)');
		var fieldset = Contact.els.formEl.find('fieldset');
		var payload = Contact.els.formEl.serializeArray().reduce(function (memo, cur) {
			memo[cur.name] = cur.value;
			return memo;
		}, {});

		ga('ComboTracker.send', 'event', 'Contact Form', 'submit', payload.type);

		$.post('/', payload)
			.done(function () {
				fieldset.css('opacity', 0);
				successEl.css('opacity', 0);
				setTimeout(function () {
					fieldset.css('display', 'none');
					successEl.css('display', 'block').css('opacity', 1);
				}, 200);
			})
			.fail(function (e, code, message) {
				var errorMessage = message === 'Unprocessable Entity' ?
					'It looks like an invalid email was entered, we require a valid email in order to coordinate a response, thanks!' :
					'Unfortunately your message could not be sent. Please try again later or email us at <a href="mailto:support@nodebb.org">support@nodebb.org</a>. Thanks!';

				failureEl.find('p').html(errorMessage);
				fieldset.css('opacity', 0);
				failureEl.css('opacity', 0);
				setTimeout(function () {
					fieldset.css('display', 'none');
					failureEl.css('display', 'block').css('opacity', 1);
				}, 200);
			});
	};

	Contact.showForm = function () {
		var buttonEl = $(this);
		var siblings = $(this).siblings('button');
		var fieldset = Contact.els.formEl.find('fieldset');
		var successEl = Contact.els.formEl.find('> div:nth-child(3)');
		var failureEl = Contact.els.formEl.find('> div:nth-child(4)');
		var doReset = this.getAttribute('data-clear') === '1';

		if (doReset) {
			Contact.els.formEl.get(0).reset();
		}

		// Highlight selection and expose form
		siblings.toggleClass('selected', false);
		buttonEl.toggleClass('selected', true);
		fieldset.css('display', 'block');
		successEl.css('display', 'none');
		failureEl.css('display', 'none');

		// Fade in form (hide success div)
		successEl.css('opacity', 0);
		setTimeout(function () {
			fieldset.css('opacity', 1);
			fieldset.css('display', 'block');
			successEl.css('display', 'none');
			failureEl.css('display', 'none');
		}, 200);

		// Hide buttons on mobile once selected
		$(this.parentNode).toggleClass('selected', true);

		// Set contact form type
		Contact.els.formEl.find('#type').val(buttonEl.attr('data-type'));

		// Focus on first input
		fieldset.find('input').get(0).focus();

		// Re-enable all buttons
		Contact.els.modalEl.find('button').prop('disabled', false);
		Contact.els.formEl.find('.submit').text('Send');

		// GA integration
		ga('ComboTracker.send', 'event', 'Contact Form', 'start', buttonEl.attr('data-type'));
	};

	Contact.init();

	window.nodebb = window.nodebb || {};
	window.nodebb.contact = Contact;
});