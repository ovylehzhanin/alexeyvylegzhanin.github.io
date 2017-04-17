$(document).ready(function() {
	
	if ( $(window).width() < 640 ) {
		$('.mobile-item').hide();
		$('.list-expander').nextAll().hide();
	}

	$('.menu-opener').click(function() {
		// e.preventDefault();

		$('.mobile-item').toggleClass('expanded');

		if ( $(window).width() < 640 ) {
			$('.mobile-item').slideToggle('fast');
		}

		if ( $(window).width() >= 640 ) {
			$('.main-menu').toggleClass('visible');
		}

	});

	$('.list-expander').click(function() {

		if ( $(window).width() >= 640 ) {
			if ( !$(this).parent().hasClass('filter-box') ) {
				return false;
			}
		}

		$(this).nextAll().slideToggle('fast');
		$(this).parent().toggleClass('expanded-list');
	});

	$(window).resize(function() {
		
		if ( !$('.mobile-item').hasClass('expanded') ) {
			$('.mobile-item').slideUp(0);
		}

		if ($(window).width() > 640) {
		    $('.mobile-item').css('display','');
		    $('.list-expander').nextAll().css('display', '');
		}
	});

});