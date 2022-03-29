$(window).on('load', function(event) {
	$('body').removeClass('preloading'); // ẩn class preloading
	$('.load').delay(500).fadeOut('fast'); 
});