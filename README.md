# Philip Bankier's Personal Website


## Features
* Responsive jQuery animation with parallax
* Uses Docker/docker-compose 
* Flash notifications
* Node.js clusters support
* UI built with Pug(used to be Jade), BootStrap and jQuery
* Sendgrid Contact Form   
* CSRF protection
* Autoupdated thanks to Nodemon and Browsersync
* Project is run using Gulp 
* Integrated Youtube video and playlist player
* Integrated Soundcloud 
* Yarn Package Manager

## Prerequisites

* [Node.js 6.0+](http://nodejs.org)
* Command Line Tools
 * <img src="http://deluge-torrent.org/images/apple-logo.gif" height="17">&nbsp;**Mac OS X:** [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) (or **OS X 10.9+**: `xcode-select --install`)
 * <img src="http://dc942d419843af05523b-ff74ae13537a01be6cfec5927837dcfe.r14.cf1.rackcdn.com/wp-content/uploads/windows-8-50x50.jpg" height="17">&nbsp;**Windows:** [Visual Studio](https://www.visualstudio.com/products/visual-studio-community-vs)
 * <img src="https://lh5.googleusercontent.com/-2YS1ceHWyys/AAAAAAAAAAI/AAAAAAAAAAc/0LCb_tsTvmU/s46-c-k/photo.jpg" height="17">&nbsp;**Ubuntu** / <img src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Logo_Linux_Mint.png" height="17">&nbsp;**Linux Mint:** `sudo apt-get install build-essential`
 * <img src="http://i1-news.softpedia-static.com/images/extra/LINUX/small/slw218news1.png" height="17">&nbsp;**Fedora**: `sudo dnf groupinstall "Development Tools"`
 * <img src="https://en.opensuse.org/images/b/be/Logo-geeko_head.png" height="17">&nbsp;**OpenSUSE:** `sudo zypper install --type pattern devel_basis`


## How To Run
### To run in Development 
* Run `gulp` in project folder
* Open `<Your-Router-IP-Here>:5000` in a web browser(For example: `192.168.1.8:5000`)
### To run in Production 
* Run `docker-compose up` in project folder
* Open `<Your-Router-IP-Here>:5050` in a web browser(For example: `192.168.1.8:5050`)

## Tips
* Chrome caches files so if you are developing, use Ctrl+Shift+R to force reload a page

## Project Structure

| Name                               | Description                                                  |
| ---------------------------------- | ------------------------------------------------------------ |
| **controllers**/contact.js         | Controller for contact form.                                 |
| **controllers**/pages.js           | Controller for all pages.                                    |
| **public**/                        | Static assets (fonts, css, js, img).                         |
| **public/css**/                	 | Explain each stylesheet later                                |
| **public/js**/                 	 | Explain each JavaScript later                                |
| **public/images**/                 | Explain each file later                                      |
| **views/myThings**/                | Resume,about me, contact my and my interests                 |
| **views/otherStuff**/              | articles, resources and pics of my awesome pets              |
| **views/partials**/flash.pug       | Error, info and success flash notifications.                 |
| **views/partials**/header.pug      | Navbar partial template.                                     |
| **views/partials**/footer.pug      | Footer partial template.                                     |
| **views**/layout.pug               | Base template.                                               |
| **views**/home.pug                 | Home page template.                                          |
| **views**/rules.pug                | Game rules app                                               |
| **views**/summary.pug              | My projects page                                             |
| app.js                             | The main application file.                                   |
| package.json                       | NPM dependencies.                                            |
| package-lock.lock                  | Contains exact versions of NPM dependencies in package.json. |
| gulpfile.js                        | Launchs the app after starting nodemon and browsersync       |
| routes.js                          | This holds all the routes                                    |

## Tasks To Do

### Priorities
* Add respond js for better polyfills - https://github.com/scottjehl/Respond
* Add Easing animation on scroll to top and particular places - https://www.npmjs.com/package/jquery.easing
* Add css animations to proj - https://daneden.github.io/animate.css/
* Make footer small until you hit the bottom and more stuff, make header come after the home page pic then lock to top once scrolled - https://github.com/bigspotteddog/ScrollToFixed
* Add wow for js animations - http://mynameismatthieu.com/WOW/
* https://github.com/coverflowjs/coverflow
* Add to cool page - https://codepen.io/kevincharm/pen/Rjgozo
* Add to cool page - https://codepen.io/ge1doot/pen/WbWQOP
* Fix this boo photo gallery - http://jsfiddle.net/sachin377/2patspw2/
* Make homepage more responsive - make the title animation responsive
* Use isotope for filtering content - https://isotope.metafizzy.co/
* HTML5 Shiv - enables use of HTML5 sectioning elements in legacy Internet Explorer and provides basic HTML5 styling for Internet Explorer 6-9, Safari 4.x (and iPhone 3.x), and Firefox 3.x - https://github.com/aFarkas/html5shiv
* Classie - support for older browsers - https://github.com/desandro/classie

#### General
* Dope animations - check this out - https://codepen.io/airnan/pen/GOvebO
* Make a code and other things shop like - this https://www.devonstank.com/products/accordion-style-1
* Activate one.com site hosting and use given url
* Improve form appearance
* Use Google Analytics
* Add this and other linters to gulp - https://github.com/emartech/gulp-pug-lint
* Add babel
* Start using webpack
* Add counter to graduation - https://www.bypeople.com/countdown-cube-plugin/
* Add effect that lets me overlay a pic of me now on a pic of me as kid then the slider reveals other
* add button and route for page about how i made the site. Like what tech , features etc
* Beautiful scrolling navigation - http://slinky.iclanzan.com
* cool accordian menu - https://codepen.io/chrisMaki/full/mdKgc
* use this image accordian - http://preview.codecanyon.net/item/grid-accordion-responsive-wordpress-plugin/full_screen_preview/7788530?ref=jqueryrain&clickthrough_id=1122970441&redirect_back=true
* Performant CSS transitions & animations - http://h5bp.github.io/Effeckt.css/
* Learn GSAP - https://www.slant.co/topics/4797/viewpoints/5/~javascript-animation-frameworks~gsap
* Make game or somthing using flashlight effect - https://codemyui.com/flashlight-mouse-pointer/
* CSS Easy Animations - https://daneden.github.io/animate.css/
* Cool animated ribbon for adding a cool side page - http://lab.hakim.se/forkit-js/
* Cover rotater - https://github.com/coverflowjs/coverflow
* Add funny sales page with price list - https://bootsnipp.com/snippets/featured/bootstrap-30-responsive-pricing-tables
* add this 3d curtain effect on scroll - https://codemyui.com/3d-curtain-effect-on-scroll/
* Add more stock widgets - https://www.tradingview.com/widget/
* Use for galleries on homepage - 
* Awesome picture portfolio - https://bootdey.com/snippets/view/Awesome-portfolio
* Cool title screen, add to somthing - https://codepen.io/lgrqvst/pen/wPdREK
* Parallax Animated Card UI Snippet - https://codemyui.com/mesmerizing-parallax-animated-info-card/
* Really cool hover effects - https://codemyui.com/bunch-really-fancy-css-hover-effects/

#### Text animations and other text effects
* Use this text animation as user scrolls down the page - https://codepen.io/kh-mamun/pen/NdwZdW
* shatter text effect - https://codepen.io/ARS/pen/pjypwd
* Cool bit typeing animation - https://codepen.io/gbnikolov/pen/jEqQdG
* Filling SVG Text - https://codepen.io/supah/pen/vXyBza
* Cool Anime.js effects - https://codepen.io/collection/XLebem/ - http://animejs.com/
* Try to usue this - http://www.vittoriozaccaria.net/dyncss-example/
* Add google maps things - https://mapsed.apphb.com/
* Appear and Disappear Text Animation - https://codemyui.com/appear-disappear-text-animation/
* SVG Text Mask With Video Background - https://codemyui.com/svg-text-mask-video-background/

#### Cool Image effects
* Water Blur Animation- https://codemyui.com/looking-water-blur-animation-effect-5-styles/
* Glitch img effect(dope) - https://codemyui.com/horror-movie-like-glitch-effect/
* Awesome split image effect - https://codemyui.com/vertical-split-image-slideshow/
* Parallax Effect on Hover - https://codemyui.com/parallax-effect-hover/
* Multi layer image slider - https://codemyui.com/multi-layer-image-slider/
* Hover effect - http://bestjquery.com/tutorial/hover-effect/demo150/

#### Home 
* progress bar - http://bestjquery.com/tutorial/progress-bar/demo65/
* Add this - https://bootsnipp.com/snippets/featured/simple-resume-template
* Use this code pen to make the second link - https://codepen.io/maheshambure21/pen/PGpqQQ - https://html5up.net/highlights
* Add projects - http://www.garysheng.com/
* my projects should be this - https://codepen.io/noeldelgado/pen/PZJGLx
* make the picture of me change from a baby pic to a current pic as you scroll down the page
* change passion pics and figure out why pics arent responsive
* prjects could be this format - https://github.com/michaelsoriano/bootstrap-photo-gallery/blob/master/demo.html
* 10 Easy Image Hover Effects You Can Copy and Paste - https://designshack.net/articles/css/joshuajohnson-2/
* Add resume to bottom and look at - http://www.tymandrews.com/#resume
* Interests - 1. astronomy -> https://www.bypeople.com/css-js-webgl-rotating-3d-globe-effect/  
* Get gallery of gallery working - https://bootsnipp.com/snippets/WPKPO
* Connection of dots should slow down on idle 

#### Navbar
* Improve navbar with YAMM - http://geedmo.github.io/yamm3/

#### Articles page 
* Add articles and improve appearance
* Accoridion - https://codepen.io/raubaca/pen/PZzpVe

#### Problematic 
* Add content and improve appearance

#### Resources 
* Improve appearance

#### Need to Read 
* Improve appearance

#### Contact Me 
* make more like this - https://www.devonstank.com/contact/
* Add direct messaging to the contact page, instead of links for social media
* Add social buttons - https://lipis.github.io/bootstrap-social/
* Add to contact page - https://bootdey.com/snippets/view/Contact-page-section

#### Resume
* Make more like this - https://www.devonstank.com/resume/

#### Buddy/Boo
* Add picture light slider - http://jquery-plugins.net/jquery-lightslider-lightweight-responsive-content-slider

#### Projects
* Integrate projects 

#### Things I Like Page
* Add super dope music thing - https://codepen.io/woodwork/pen/rxrLqa
* improve music section with this soundcloud plugin - https://github.com/ToneDen/Player
* Name interests
* Add this widget - https://www.tradingview.com/widget/market-overview/

#### Cool
* fix the emotion detector - https://codepen.io/sdras/pen/dZOdpv
* Rainbow particle mobeus - https://codepen.io/cvaneenige/pen/vWZJxz
* crazy orb thing - https://codepen.io/ge1doot/pen/QOpRxB
* Colour me in using your mouse or finger!  - https://codepen.io/LloydJames/pen/qVXJNy 
* Rainbow Mouse Trail - https://codemyui.com/rainbow-mouse-trail/
* Awesome site generator - http://megaboilerplate.com/

## Current Development
* Continue integrating - https://github.com/BlackrockDigital/startbootstrap-creative 
* Look into Travis CI
* Add blog, use this - https://bootdey.com/snippets/view/blog-item

### Look into 
* Linear gradient - https://codepen.io/lgrqvst/pen/wPdREK
* Do this for alex - https://www.w3schools.com/bootstrap/bootstrap_theme_band.asp
* Alexs starting theme - https://themewagon.com/themes/free-one-page-multipurpose-responsive-bootstrap-template-download-2017/