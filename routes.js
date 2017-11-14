var express = require('express');

/**
 * Controllers (route handlers).
 */
const contactController = require('./controllers/contact');
const pagesController = require('./controllers/pages');

var router = express.Router();

/**  
 * Primary route
 */
router.route('/').get(pagesController.home);

/**  
 * My Stuff Routes
 */
router.route('/likes').get(pagesController.likes);
router.route('/rules').get(pagesController.rules);
router.route('/problematic').get(pagesController.problematic);
router.route('/summary').get(pagesController.summary);
router.route('/contact').get(contactController.getContact);
router.route('/contact').post(contactController.postContact);
router.route('/resume').get(pagesController.resume);
router.route('/cool').get(pagesController.cool);
router.route('/hardware').get(pagesController.hardware);

/**  
 * Other Stuff Routes
 */
router.route('/buddy').get(pagesController.buddy);
router.route('/boo').get(pagesController.boo);
router.route('/articles').get(pagesController.articles);
router.route('/resources').get(pagesController.resources);

/**  
 * "For This Site" Routes
 */
router.route('/read').get(pagesController.read);

module.exports = router;