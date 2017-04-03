$(document).ready(function() {
	
	$('.search-group').slideUp(0);
	$('.header-top').slideUp(0);
	$('.header-bottom').slideUp(0);

	var navOpener = $('.nav-opener');

	navOpener.click(function() {
		$('.search-group').slideToggle('fast');
		$('.header-top').slideToggle('fast');
		$('.header-bottom').slideToggle('fast');
	});

	$('.expander').click(function() {
		$(this).nextAll().slideToggle('fast');
	});

});