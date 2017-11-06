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

// Start RYPP for youtube player
$(document).ready(function() {

  // Figure out why this isnt working
  // var api_key = process.env.YOUTUBE_KEY;
  var api_key = 'AIzaSyBYF2ckgQfblmixbe-5VGdh5UXjprm9OJg';


   // Initialize all the player in the page with default options
  $('.RYPP').rypp( api_key );
});
