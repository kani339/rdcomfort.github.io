$(function(){
	
	$("#portfolio_grid").mixItUp();
	
	//Add uniq id for modal-window
	$(".mix").each(function(i){
		$(this).find("a").attr("data-target", "#portf_"+ i);
		$(this).find(".fade").attr("id", "portf_" + i);
	});


	//take same image url
	$(".mix").each(function(y){
		var src = $(this).find("img").attr("src");
		var l = $(".modal-body img")[y];
		$(".modal-body").find(l).attr("src", src);
	});

	
	//Pop-up
	$(".popup_content").magnificPopup({type : "inline", midClick: true});

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
	//history.pushState("", document.title, window.location.pathname);
	


	
});