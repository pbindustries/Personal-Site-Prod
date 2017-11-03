var express = require('express');

/**
 * Controllers (route handlers).
 */
const userController = require('./controllers/user');
const apiController = require('./controllers/api');
const contactController = require('./controllers/contact');
const pagesController = require('./controllers/pages');

//// DEV - Figure out how to have all routes here
// /**
//  * API keys and Passport configuration.
//  */
// const passportConfig = require('./config/passport');

var router = express.Router();


/**  
 * Primary routes
 */
router.route('/').get(pagesController.home);
router.route('/projects').get(pagesController.projects);
router.route('/resume').get(pagesController.resume);
router.route('/resources').get(pagesController.resources);
router.route('/about').get(pagesController.about);
router.route('/rules').get(pagesController.rules);
router.route('/problematic').get(pagesController.problematic);
router.route('/summary').get(pagesController.summary);

/**  
 * "For This Site" Routes
 */
router.route('/read').get(pagesController.read);

/**  
 * Cool Stuff Routes
 */
router.route('/buddy').get(pagesController.buddy);
router.route('/boo').get(pagesController.boo);
router.route('/articles').get(pagesController.articles);

/**   
 * Account routes
 */
router.route('/login').get(userController.getLogin);
router.route('/login').post(userController.postLogin);
router.route('/logout').get(userController.logout);
router.route('/forgot').get(userController.getForgot);
router.route('/forgot').post(userController.postForgot);
router.route('/reset/:token').get(userController.getReset);
router.route('/reset/:token').post(userController.postReset);
router.route('/signup').get(userController.getSignup);
router.route('/signup').post(userController.postSignup);
router.route('/contact').get(contactController.getContact);
router.route('/contact').post(contactController.postContact);
// router.route('/account').get(passportConfig.isAuthenticated, userController.getAccount);
// router.route('/account/profile').post(passportConfig.isAuthenticated, userController.postUpdateProfile);
// router.route('/account/password').post(passportConfig.isAuthenticated, userController.postUpdatePassword);
// router.route('/account/delete').post(passportConfig.isAuthenticated, userController.postDeleteAccount);
// router.route('/account/unlink/:provider').get(passportConfig.isAuthenticated, userController.getOauthUnlink);

// /** 
//  * API examples routes.
//  */

// router.route('/api').get(apiController.getApi);
// router.route('/api/scraping').get(apiController.getScraping);
// router.route('/api/facebook').get(passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getFacebook);
// router.route('/api/linkedin').get(passportConfig.isAuthenticated, passportConfig.isAuthorized, apiController.getLinkedin);

// //// DEV - get these routes working then add them to router
// /**
//  * OAuth authentication routes. (Sign in)
//  */
// app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email', 'public_profile'] }));
// app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect(req.session.returnTo || '/');
// });
// app.get('/auth/google', passport.authenticate('google', { scope: 'profile email' }));
// app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect(req.session.returnTo || '/');
// });
// app.get('/auth/linkedin', passport.authenticate('linkedin', { state: 'SOME STATE' }));
// app.get('/auth/linkedin/callback', passport.authenticate('linkedin', { failureRedirect: '/login' }), (req, res) => {
//   res.redirect(req.session.returnTo || '/');
// });

module.exports = router;