$(document).ready(function() {
	
	// $('.search-box').slideDown(0);
	// $('.header-top').slideDown(0);
	// $('.header-bottom').slideDown(0);

	// var navOpener = $('.nav-opener');

	// navOpener.click(function() {
	// 	$('.search-box').slideToggle('fast');
	// 	$('.header-top').slideToggle('fast');
	// 	$('.header-bottom').slideToggle('fast');
	// });

	// $('.expander').click(function() {
	// 	$(this).nextAll().slideToggle('fast');
	// });
	
	(function() {
		var opener = $('.action-opener'),
			subAction = $('.sub-action');

		if ( opener.hasClass('collapsed') ) { 
			opener.find(subAction).slideUp(0);
		}

		opener.click(function() {
			$(this).find(subAction).slideToggle('fast');
		});	
	})();

	$('.nav-opener').click(function() {

		$('.main-menu').toggle();

	});
	

});