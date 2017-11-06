var express = require('express');

/**
 * Controllers (route handlers).
 */
const contactController = require('./controllers/contact');
const pagesController = require('./controllers/pages');

var router = express.Router();

/**  
 * Primary routes
 */
router.route('/').get(pagesController.home);
router.route('/resume').get(pagesController.resume);
router.route('/resources').get(pagesController.resources);
router.route('/about').get(pagesController.about);
router.route('/rules').get(pagesController.rules);
router.route('/problematic').get(pagesController.problematic);
router.route('/summary').get(pagesController.summary);
router.route('/contact').get(contactController.getContact);
router.route('/contact').post(contactController.postContact);

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

module.exports = router;