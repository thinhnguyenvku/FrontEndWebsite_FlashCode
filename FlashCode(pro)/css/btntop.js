<script src="http://code.jquery.com/jquery-latest.js"></script>
$(function(){
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) $(".lentop").fadeIn();
		else $(".lentop").fadeOut();
	});
		$(".lentop").click(function () {
			$("body,html").animate({scrollTop: 0}, "slow");
		});
});