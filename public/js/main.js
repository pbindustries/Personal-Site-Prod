// Smooth scrolling to top of page
$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, "slow");
  return false;
}); 

//Nav bar
$(window).scroll(function () {
	if ($(window).scrollTop() >= 50) {
		$('.navbar').css('background','rgba(101,153,255,0.75)');
	} 
	else {
		// $('.navbar').css('background','rgba(255,255,255,0.25)');
		$('.navbar').css('background','rgba(101,153,255,0.50)');
	}
});
