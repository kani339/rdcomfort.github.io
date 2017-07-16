$(function(){
	
	var currFilter = localStorage.setItem("currFilter",'.office');;

	function activeItem() {			
		var sect = localStorage.getItem('section');
		//changeFilter(); 
		$('#portfolio_grid').mixItUp({
			load: {
				filter: '.'+sect
			}
		});
	}

	$(".filter").on("click", function() {
			currFilter = localStorage.getItem("currFilter");
			$(currFilter + " > a").removeAttr("data-fancybox").removeClass("fancybox");
			var activeFilter = $(this).attr("data-filter");
			//Set new active filter
			var setActive = $(activeFilter +"> a").attr('data-fancybox', 'images').addClass('fancybox');
			$('[data-fancybox="images"]').fancybox({});
			currFilter = localStorage.setItem("currFilter",activeFilter);
	}); 



	$(".image-portfolio").on('click', function(){
	 	var sect = $(this).attr("data-section");
	 	localStorage.setItem("section", sect);
	 	localStorage.setItem("state", "true");
	  window.location = "portfolio.html";	 
	});



	if(localStorage.getItem("state")=="true") {
       activeItem();
   } else {
   		$(".office > a").attr('data-fancybox', 'images').addClass('fancybox');
   		$('[data-fancybox="images"]').fancybox({});
    	$('#portfolio_grid').mixItUp({
				load: {
			      filter: '.office'
				}
			});
    }
    //default state
    localStorage.setItem("state", "false");


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


	/*Scroll To Top*/
	var backToTop = $(".back-to-top");
	$(window).on("scroll", function() {
		var self = $(this),
				height = self.height(),
				top = self.scrollTop();
		if(top > height) {
			$(".navbar-default").css("background-color","rgba(255,255,255,1)")
			if (!backToTop.is(":visible")) {
				backToTop.fadeIn();
			}
		}else {
			backToTop.fadeOut();
			$(".navbar-default").css("background-color","rgba(255,255,255,.6)")
		}
	});

	backToTop.on("click",function(e){
		$('html body').animate({
			scrollTop: 0
		}, 900);
		e.preventDefault();
	});		


	$(".scrollIt").click(function() {
    $('html, body').animate({
        scrollTop: $(".scrollPoint").offset().top-140
    }, 1500);
	});

	// The function actually applying the offset
	function offsetAnchor() {
	  if (location.hash.length !== 0) {
	    window.scrollTo(window.scrollX, window.scrollY);
	  }
	}

	// Captures click events of all a elements with href starting with #
	$(document).on('click', 'a[href^="#"]', function(event) {
	  // Click events are captured before hashchanges. Timeout
	  // causes offsetAnchor to be called after the page jump.
	  window.setTimeout(function() {
	    offsetAnchor();
	  }, 0);
	});

	// Set the offset when entering page with hash present in the url
	window.setTimeout(offsetAnchor, 0);

	
});