function addCSRF(csrf) {
	var	formEl = document.getElementsByTagName('form')[0],
		csrfEl = document.createElement('input');

	csrfEl.type = 'hidden';
	csrfEl.name = '_csrf';
	csrfEl.value = csrf;

	formEl.appendChild(csrfEl);
}

(function() {
	var scriptEl = document.createElement('script');
	scriptEl.src = 'https://manage.nodebb.org/api/csrf';
	document.head.appendChild(scriptEl);
})();