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
	/*$(".mix").each(function(i){
		$(this).find("a").attr("data-target", "#portf_"+ i);
		$(this).find(".fade").attr("id", "portf_" + i);
	});

	//take same image url
	$(".mix").each(function(y){
		var src = $(this).find("img").attr("src");
		var l = $(".modal-body img")[y];
		$(".modal-body").find(l).attr("src", src);
	});*/



	//Add uniq id for modal-window
	/*$(".mix").each(function(i){
		$(this).find("a").eq(0).attr("data-target", "#portf_"+ i);
		$(this).find(".fade").attr("id", "portf_" + i);
	});


	//take same image url
	$(".mix").each(function(y){
		var src = $(this).find("img").attr("src");
		var l = $(".modal-body > img")[y];
		$(".modal-body").find(l).attr("src", src);
	});*/

	


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

		if(scrollPos > 880) {
			$('.navbar-default').css('background-color','rgba(255,255,255,1)');
		} else {
			$('.navbar-default').css('background-color','rgba(255,255,255,.6)');
		}

	});

	/*Scroll To Top*/

	var backToTop = $(".back-to-top");
	$(window).on("scroll", function() {
		var self = $(this),
				height = self.height(),
				top = self.scrollTop();
		if(top > height) {
			if (!backToTop.is(":visible")) {
				backToTop.fadeIn();
			}
		}else {
			backToTop.fadeOut();
		}
	});

	backToTop.on("click",function(e){
		$('html body').animate({
			scrollTop: 0
		}, 900);
		e.preventDefault();
	});


	$('[data-fancybox="images"]').fancybox({
		
   });
	

	//Portfolio slide
/*
		var next = $(".next");
		var prev = $(".prev");
		var item = $('.modal-body > img');
		item.first().addClass("active")
		
		next.click(function(){
				var item = $('.modal-body > img');
        var index = + $('.modal-body > img').index($('.modal-body > img.active'));
        index = (item.length - 1 === index) ? 0 : index + 1;
        item.removeClass('active');
        item = item.eq(index).addClass("active");
        
  	});*/

/*  	var next = $(".next"),
  			prev = $(".prev"),
  			item = $(".modal-body > img"),
  			total = $(".modal-body > img").length-1;

	
  var mixImg = $(".mix");

  	mixImg.on("click", function(){

  		var i = $(this).index();	
  		item.eq(i).addClass("active");

	  	next.on("click", function(){ 

	  		//item.eq(i).removeClass("active")
	  		var n = i+1;
	  		var nxtImg = item.eq(n).prop('src');
	  		item.eq(i).prop('src', nxtImg);
	  	});
  	});
  */



});