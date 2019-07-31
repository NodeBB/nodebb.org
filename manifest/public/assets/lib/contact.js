$(document).ready(function () {
	var Contact = {
		els: {
			toggleEl: $('.contact-toggle'),
			modalEl: $('.contact-modal'),
			wrapperEl: $('.contact-modal-wrapper'),
			overlayEl: $('.contact-overlay'),
			closeEl: $('.contact-modal .close'),

			headerToggleEl: $('.header-contact-toggle'),
			headerModalEl: $('.header-contact-modal'),
			headerWrapperEl: $('.header-contact-modal-wrapper'),
			headerCloseEl: $('.header-contact-modal .close'),
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
		Contact.els.overlayEl.on('click', Contact.hideModal);
		Contact.els.closeEl.on('click', Contact.hideModal);
		Contact.els.headerToggleEl.on('click', Contact.showHeaderModal);
		Contact.els.overlayEl.on('click', Contact.hideHeaderModal);
		Contact.els.headerCloseEl.on('click', Contact.hideHeaderModal);
	};

	Contact.showModal = function () {
		Contact.els.overlayEl.toggleClass('open', true);
		Contact.els.toggleEl.toggleClass('open', true);
		Contact.els.wrapperEl.toggleClass('open', true);
		$('body').toggleClass('modal-open', true);
	};

	Contact.showHeaderModal = function () {
		Contact.els.overlayEl.toggleClass('open', true);
		Contact.els.headerWrapperEl.toggleClass('open', true);
		$('body').toggleClass('modal-open', true);
	};
	
	Contact.hideModal = function () {
		Contact.els.overlayEl.toggleClass('open', false);
		Contact.els.toggleEl.toggleClass('open', false);
		Contact.els.wrapperEl.toggleClass('open', false);
		$('body').toggleClass('modal-open', false);
	};
	
	Contact.hideHeaderModal = function () {
		Contact.els.overlayEl.toggleClass('open', false);
		Contact.els.headerToggleEl.toggleClass('open', false);
		Contact.els.headerWrapperEl.toggleClass('open', false);
		$('body').toggleClass('modal-open', false);
	};

	Contact.init();

	window.nodebb = window.nodebb || {};
	window.nodebb.contact = Contact;
});