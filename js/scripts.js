(function($){
	$(document).ready(function() {	

		// Scroll to Top
		jQuery('.scrolltotop').click(function(){
			jQuery('html').animate({'scrollTop' : '0px'}, 400);
			return false;
		});
		
		jQuery(window).scroll(function(){
			var upto = jQuery(window).scrollTop();
			if(upto > 500) {
				jQuery('.scrolltotop').fadeIn();
			} else {
				jQuery('.scrolltotop').fadeOut();
			}
			if(upto > 150) {
				jQuery('.nav-area').addClass('nav-fixed');
			}else {
				jQuery('.nav-area').removeClass('nav-fixed');
			}
		});


		jQuery(window).resize(function(){
			const winWidth = jQuery(window).width();
			if(winWidth >= 768) {
				jQuery(".navbar-content").removeAttr("style");
			}
		});
		
  
		function handleNavEvents() {
			if ($(window).width() < 992) {
				// For screens below 992px: use click event
				$('.navbar-content ul').off('mouseenter mouseleave').on('click', 'li', function(event) {
					event.preventDefault();
					$(this).siblings().removeClass('active');
					$(this).toggleClass('active');
				});
			} else {
				// For screens 992px and above: use hover events
				$('.navbar-content ul').off('click').on('mouseenter', 'li', function() {
					$(this).siblings().removeClass('active');
					$(this).addClass('active');
				}).on('mouseleave', 'li', function() {
					$(this).removeClass('active');
				});
			}
		}
		
		// Run the function on page load
		handleNavEvents();
		
		// Run the function on window resize to reapply the correct event based on screen width
		$(window).resize(function() {
			handleNavEvents();
		});

		// Close dropdown if clicking outside
		$(document).click(function(event) {
			if (!$(event.target).closest('.dropdown').length) {
				$('.dropdown').removeClass('active');
			}
		});

		jQuery('.toogle-btn button').click(function(){
			jQuery('.navbar-content').slideToggle();
			jQuery('.nav-area').toggleClass('nav_bg');
			jQuery('.top-menu-wrapper').toggleClass('nav_bg');
		});
		
		

		
		
	});
})(jQuery);