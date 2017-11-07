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

// Scroll to top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// Cube photo gallery
$('.carousel-demo').jR3DCarousel({
  width : 600,       
  height: 450,   
  slides: slides,
  animation: "slide3D"
});

// Responsive Quote Carousel 
// Run this function when DOM is ready
$(document).ready(function() { 
  //Set the carousel options
  $('#quote-carousel').carousel({
    pauseOnHover: true,
    interval: 1000,
  });
});