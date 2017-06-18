$(document).ready(function(){

	$("#slideMenu").click(function(){
	    $(".navigation").slideToggle(520);
	    $(".navigation").css("left", "0");
	    $(".h1_wrapper").css("padding-top", "200px");
	});

	$(window).resize(function(){
		if ($(window).width() > 768 ) {
			$(".navigation").removeAttr("style");
		}
	});

});