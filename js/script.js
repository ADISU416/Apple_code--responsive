$(document).ready(function () {
    $(window).on('resize', function(event){
		if ($(window).width() <= 768){	
			$('.footer-links-wrapper').addClass("someClass");
		}else{
			$('.footer-links-wrapper').removeClass("someClass");
			$('.footer-links-wrapper ul').show();
		}	
	});
	// Footer collapse functi onality 
	$(document).on("click", ".someClass h3", function(){
		$(this).next('ul').slideToggle();
		$(this).toggleClass("expanded");
	});
});
// Search bar 
$('.nav-link').click(function(event){
	event.preventDefault();
	$(".navbar-collapse.collapse").hide();
	$(".searchbox").slideToggle();
});
