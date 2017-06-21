$(function(){
	
	var navOffset = $('.navbar').offset().top;

	$(".navbar").wrap('<div class="nav-placeholder"></div>');
	$(".nav-placeholder").height($(".navbar").outerHeight());

	$(window).scroll(function(){
		var scrollPos = $(window).scrollTop();
	
		if(scrollPos >= navOffset) {
			$(".navbar").addClass("fixed");
		} else {
			$(".navbar").removeClass("fixed");
		}
	});

	//Remove lightbox after refreshing page
	history.pushState("", document.title, window.location.pathname);

	

	
});