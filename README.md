# Philip Bankier's Personal Website

## Features
* Responsive jQuery animation with parallax
* Uses Docker/docker-compose 
* Flash notifications
* Node.js clusters support
* Bootstrap 3 + jQuery 
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

##Prerequisites

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

## Tasks To Do
#### General
* Set up AWS
* Activate one.com site hosting and use given url
* Improve form appearance
* Use Google Analytics
* Add this and other linters to gulp - https://github.com/emartech/gulp-pug-lint
* Add babel
* Start using webpack
* Add Node scss compiler
#### Navbar
* Improve navbar with YAMM - http://geedmo.github.io/yamm3/
* Add Animation to navbar - https://codepen.io/Rplus/pen/lEDBj

#### About me 
* Add skills, about and more content
* Add resume to bottom and look at - http://www.tymandrews.com/#resume  
* Also check out - https://www.devonstank.com/about 
* Look at - http://quinntonharris.strikingly.com/
* Look at - http://www.quinntonharris.com/work/
#### Home 
* Add projects - http://www.garysheng.com/
#### Articles page 
* Add articles and improve appearance
#### Problematic 
* Add content and improve appearance
#### Resources 
* Improve appearance
#### Need to Read 
* Improve appearance
#### Contact Me 
* Make form opaque and move onto the picture
* Add direct messaging to the contact page, instead of links for social media
* Add social buttons - https://lipis.github.io/bootstrap-social/

#### Buddy/Boo
* Lightgallery - https://github.com/sachinchoolur/lightGallery
* Add picture light slider - http://jquery-plugins.net/jquery-lightslider-lightweight-responsive-content-slider
#### Projects
* Integrate projects 
#### Things I Like Page
* Add super dope music thing - https://codepen.io/woodwork/pen/rxrLqa

## Tips
* Chrome caches files so if you are developing, use Ctrl+Shift+R to force reload a page