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

	//Wrap title and image into div
	$(".mix").each(function(){
		$(this).find("img").eq(0).wrap("<a href=''></a>");
		$(this).find("p").next().addBack().wrapAll("<div></div>");
	})

	//Add uniq id for modal-window
	$(".mix").each(function(i){
		$(this).find("a").attr("href", "#inline"+ i);
		$(this).find("a + div").attr("id", "inline" + i).css({"display":"none", "min-width":"340px"});
		//$(this).find("div[id^='inline'] img").css("text-align","center");
	});


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
   		$(".office > a").attr('data-fancybox', 'gallery').addClass('fancybox');
   		$('[data-fancybox="images"]').fancybox({

   		});
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


	$(".form > input[type='tel']").keypress(function(){
		var phone = $('.form > input[type="tel"]').val();
		var reg = new RegExp("[0-9]");
		if (reg.test(phone)) {
			$(this).css("border","2px solid green");
			allow = true;
		} else {
			$(this).css("border","2px solid red");
		}
	});

		$(".form > input[type='text']").keypress(function(){
		var phone = $(this).val();
		var reg = new RegExp("[a-zA-Zа-яА-Я]");
		if (reg.test(phone)) {
			$(this).css("border","2px solid green");
			allow = true;
		} else {
			$(this).css("border","2px solid red");
		}
	});




});
