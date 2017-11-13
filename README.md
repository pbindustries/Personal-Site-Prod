# Philip Bankier's Personal Website

* Talk to bro about making a site like -> https://www.devonstank.com/about

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

### Coming Features
* MVC Project Structure
* Sass stylesheets (auto-compiled via middleware)
* **Account Management**
 * Gravatar
 * Profile Details
 * Change Password
 * Forgot Password
 * Reset Password
 * Link multiple OAuth strategies to one account
 * Delete Account

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
| **public/css**/                | Explain each stylesheet later                                |
| **public/js**/                 | Explain each JavaScript later                                |
| **public/images**/             | Explain each file later                                      |
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

#### General
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
#### Text animations and other text effects
* Use this text animation as user scrolls down the page - https://codepen.io/kh-mamun/pen/NdwZdW
* shatter text effect - https://codepen.io/ARS/pen/pjypwd
* Cool bit typeing animation - https://codepen.io/gbnikolov/pen/jEqQdG
* Filling SVG Text - https://codepen.io/supah/pen/vXyBza
* Cool Anime.js effects - https://codepen.io/collection/XLebem/ - http://animejs.com/
* Try to usue this - http://www.vittoriozaccaria.net/dyncss-example/

#### Cool Image effects
* Water Blur Animation- https://codemyui.com/looking-water-blur-animation-effect-5-styles/
* Glitch img effect(dope) - https://codemyui.com/horror-movie-like-glitch-effect/
* Awesome split image effect - https://codemyui.com/vertical-split-image-slideshow/
* Parallax Effect on Hover - https://codemyui.com/parallax-effect-hover/
* Multi layer image slider - https://codemyui.com/multi-layer-image-slider/

#### Home 
* Add projects - http://www.garysheng.com/
* my projects should be this - https://codepen.io/noeldelgado/pen/PZJGLx
* make the picture of me change from a baby pic to a current pic as you scroll down the page
* change passion pics and figure out why pics arent responsive
* Make grad counter smaller and make it work
* Fix passions - http://www.jsonenglish.com/projects/flex/
* prjects could be this format - https://github.com/michaelsoriano/bootstrap-photo-gallery/blob/master/demo.html
* Add this for my skills - https://codepen.io/tamak/pen/hzEer

#### Navbar
* Improve navbar with YAMM - http://geedmo.github.io/yamm3/

#### About me 
* Add skills, about and more content
* Add resume to bottom and look at - http://www.tymandrews.com/#resume
* Interests - 1. astronomy -> https://www.bypeople.com/css-js-webgl-rotating-3d-globe-effect/  

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
* make more 
like this - https://www.devonstank.com/contact/
* Add direct messaging to the contact page, instead of links for social media
* Add social buttons - https://lipis.github.io/bootstrap-social/

#### Resume
* Make more like this - https://www.devonstank.com/resume/

#### Buddy/Boo
* Lightgallery - https://github.com/sachinchoolur/lightGallery
* Add picture light slider - http://jquery-plugins.net/jquery-lightslider-lightweight-responsive-content-slider

#### Projects
* Integrate projects 

#### Things I Like Page
* Add super dope music thing - https://codepen.io/woodwork/pen/rxrLqa
* improve music section with this soundcloud plugin - https://github.com/ToneDen/Player
* Name interests

#### Cool
* fix the emotion detector - https://codepen.io/sdras/pen/dZOdpv