$(document).ready(function() {
	
	var opener = $('.nav-opener');

	opener.click(function() {

		$('.search-group').slideToggle('fast');
		$('.header-top').slideToggle('fast');
		$('.header-bottom').slideToggle('fast');

	});

});