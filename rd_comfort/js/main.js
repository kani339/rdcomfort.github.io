$(function(){
	
	
	function activeItem() {
		var sect = localStorage.getItem('section');
		$('#portfolio_grid').mixItUp({
			load: {
				filter: '.'+sect
			}
		});	
	}


	$(".image-portfolio").on('click', function(){
	 	var sect = $(this).attr("data-section");
	 	localStorage.setItem("section", sect);
	 	localStorage.setItem("state", "true");
	  window.location = "portfolio.html";	 
	});


	if(localStorage.getItem("state")=="true") {
       activeItem();
   } else {
    	$('#portfolio_grid').mixItUp({
				load: {
			      filter: '.office'
				}
			});
    }
    //default state
    localStorage.setItem("state", "false");
		

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
	
	
});