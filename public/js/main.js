// SKY BACKGROUND //////////////////////////////////////////
// 
(function() {

    var width, height, largeHeader, canvas, ctx, points, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();
    initAnimation();

    function initHeader() {
        largeHeader = document.getElementById('large-header-home');        
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: width/2, y: height/2};


        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create points
        points = [];
        for(var x = 0; x < width; x = x + width/20) {
            for(var y = 0; y < height; y = y + height/20) {
                var px = x + Math.random()*width/20;
                var py = y + Math.random()*height/20;
                var p = {x: px, originX: px, y: py, originY: py };
                points.push(p);
            }
        }

        // for each point find the 5 closest points
        for(var i = 0; i < points.length; i++) {
            var closest = [];
            var p1 = points[i];
            for(var j = 0; j < points.length; j++) {
                var p2 = points[j]
                if(!(p1 == p2)) {
                    var placed = false;
                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(closest[k] == undefined) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }

                    for(var k = 0; k < 5; k++) {
                        if(!placed) {
                            if(getDistance(p1, p2) < getDistance(p1, closest[k])) {
                                closest[k] = p2;
                                placed = true;
                            }
                        }
                    }
                }
            }
            p1.closest = closest;
        }

        // assign a circle to each point
        for(var i in points) {
            var c = new Circle(points[i], 2+Math.random()*2, 'rgba(255,255,255,0.3)');
            points[i].circle = c;
        }
    }

    // Event handling
    function addListeners() {
        if(!('ontouchstart' in window)) {
            window.addEventListener('mousemove', mouseMove);
        }

        // window.addEventListener('mousestill', mouseStill);

        window.addEventListener('scroll', scrollCheck);

        // Add for resizable window
        window.addEventListener('resize', resize);
    }

    function mouseMove(e) {
        var posx = posy = 0;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY)    {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        target.x = posx;
        target.y = posy;
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    //Resize 
    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    // animation
    function initAnimation() {
        animate();
        for(var i in points) {
            shiftPoint(points[i]);
        }
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in points) {
                // detect points in range
                if(Math.abs(getDistance(target, points[i])) < 4000) {
                    points[i].active = 0.3;
                    points[i].circle.active = 0.6;
                } else if(Math.abs(getDistance(target, points[i])) < 20000) {
                    points[i].active = 0.1;
                    points[i].circle.active = 0.3;
                } else if(Math.abs(getDistance(target, points[i])) < 40000) {
                    points[i].active = 0.02;
                    points[i].circle.active = 0.1;
                } else {
                    points[i].active = 0;
                    points[i].circle.active = 0;
                }

                drawLines(points[i]);
                points[i].circle.draw();
            }
        }
        requestAnimationFrame(animate);
    }    

    function shiftPoint(p) {
        TweenLite.to(p, 1+1*Math.random(), {x:p.originX-50+Math.random()*100,
            y: p.originY-50+Math.random()*100, ease:Circ.easeInOut,
            onComplete: function() {
                shiftPoint(p);
            }});
    }

    // Canvas manipulation
    function drawLines(p) {
        if(!p.active) return;
        for(var i in p.closest) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p.closest[i].x, p.closest[i].y);
            ctx.strokeStyle = 'rgba(156,217,249,'+ p.active+')';
            ctx.stroke();
        }
    }

    function Circle(pos,rad,color) {
        var _this = this;

        // constructor
        (function() {
            _this.pos = pos || null;
            _this.radius = rad || null;
            _this.color = color || null;
        })();

        this.draw = function() {
            if(!_this.active) return;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.radius, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(156,217,249,'+ _this.active+')';
            ctx.fill();
        };
    }

    // Util
    function getDistance(p1, p2) {
        return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }
    
})();
////////////////////////////////////////////

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

// Cool pic grid
$(function() {
  $(".flex").flex();
});

// project photo gallery
$('ul.first').bsPhotoGallery({
  "classes" : "col-lg-2 col-md-4 col-sm-3 col-xs-4 col-xxs-12",
  "hasModal" : true
});


// twenty/twenty
$(window).load(function() {
  $("#container1").twentytwenty();
});

// Home photo galleries
$(document).ready(function(){

    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        
        if(value == "all")
        {
            //$('.filter').removeClass('hidden');
            $('.filter').show('1000');
        }
        else
        {
//            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
//            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
            
        }
    });
    
    if ($(".filter-button").removeClass("active")) {
$(this).removeClass("active");
}
$(this).addClass("active");

});

function setSliderContainer() {
  var mq = checkMQ(); //function to check mq value
  if ( mq == 'desktop' ) {
    var slides = projectsSlider.children('li'), // projectsSlider = $('.cd-slider')
      slideWidth = slides.eq(0).width(),
      marginLeft = Number(projectsSlider.children('li').eq(1).css('margin-left').replace('px', '')),
      sliderWidth = ( slideWidth + marginLeft )*( slides.length ) + 'px',
      slideCurrentIndex = projectsSlider.children('li.current').index(); //index of the first visible slide
    
    projectsSlider.css('width', sliderWidth);
    //if the first visible slide is not the first <li> child, update the projectsSlider translate value
    ( slideCurrentIndex != 0 ) && setTranslateValue(projectsSlider, ( slideCurrentIndex * (slideWidth + marginLeft) + 'px'));
  } else {
    //on mobile, reset style
    projectsSlider.css('width', '');
    setTranslateValue(projectsSlider, 0);
  }
  resizing = false;
}
function setTranslateValue(item, translate) {
  item.css({
      '-moz-transform': 'translateX(-' + translate + ')',
      '-webkit-transform': 'translateX(-' + translate + ')',
    '-ms-transform': 'translateX(-' + translate + ')',
    '-o-transform': 'translateX(-' + translate + ')',
    'transform': 'translateX(-' + translate + ')',
  });
}
 
var resizing = false;
setSliderContainer();
$(window).on('resize', function(){
  //on resize - update projectsSlider width and translate value
  if( !resizing ) {
    window.requestAnimationFrame(setSliderContainer);
    resizing = true;
  }
});


