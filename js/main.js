$('.galimg').each(function(){

	var boxwid = $('.galimg').css('width');
	$(this).height(boxwid);

});

$('.galimg img').each(function(){

	var imgh = $(this).height();
	var imgw = $(this).width();

	if (imgh > imgw) {
		$(this).addClass('portrait');
	}
	else {
		$(this).addClass('landscape');
	}

});