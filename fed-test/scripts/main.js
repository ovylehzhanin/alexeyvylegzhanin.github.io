$(document).ready(function() {
	
	(function() {
		var mobileMenuItems = ['.search-form', '.menu__wrapper', '.user-menu'];

		for (item in mobileMenuItems) {
			$(mobileMenuItems[item]).addClass('mobile-menu-item');
		}

		$('.menu-opener').click(function() {
			$(this).toggleClass('expanded');

			if ( $(window).width() < 640 ) {
				$('.mobile-menu-item').slideToggle('fast');
			} else {
				$('.menu__wrapper').toggle();
			}
		});
	})();

	(function() {
		$(window).resize(function() {
			$('.mobile-menu-item').css('display', '');

			if ( $('.menu-opener').hasClass('expanded') ) {
				$(window).width() > 639 ? $('.menu__wrapper').show() : $('.menu-opener').removeClass('expanded');
			}

			$('.dropdown-menu__expander').nextAll().css('display', '');

			if ( $(window).width() > 639 ) {
				$('.sub-menu__wrapper').css('display', '');
				$('.left-column').css('display', '');
			}
		});
	})();

	(function() {
		$('.dropdown-menu__expander').click(function() {
			
			if ( $(window).width() < 640 ) {
				$(this).nextAll().slideToggle('fast');
			}

		});
	})();

	(function() {
		$('.filters-list__expander').click(function() {
			$(this).toggleClass('collapsed');
			$(this).nextAll().slideToggle('fast');
		});
	})();

	(function() {
		$('.menu__item.expander .menu__link').click(function() {
			if ( $(window).width() < 640 ) {
				$(this).parent().toggleClass('collapsed');
				$(this).nextAll().slideToggle('fast');
			}
		});
	})();

	(function() {
		$('.filters-opener').click(function() {
			$(this).toggleClass('collapsed');
			$('.left-column').slideToggle('fast');
		});
	})();

});