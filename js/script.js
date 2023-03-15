$( document ).ready(function() {
	var arrow = $(".arrow"),
		button = $(".wave-btn");
		pos = $('.wave__container').height() * 3;
	arrow.click(function() {
		window.scrollTo({
			top: pos,
			left: 0,
			behavior: "smooth"	
		});
		if (arrow.hasClass("_active")) {
			window.scrollTo({
				top: 0,
				left: 0,
				behavior: "smooth"	
			});
		}
	});
	button.click(function() {
		window.scrollTo({
			top: pos,
			left: 0,
			behavior: "smooth"	
		});
	});
	function count() {
		$(window).scroll(function(event) {
			var
			cPos = $('.wave__container').height(),
			topWindow = window.pageYOffset;
			if (topWindow > (cPos + (cPos / 2))) {
				arrow.addClass( "_active" );
			} else {
				arrow.removeClass( "_active" );
			}
		});
	};
	count();






















});
