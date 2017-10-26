/**
 * GET /
 * Resume page.
 */
exports.index = (req, res) => {
    res.render('resume', {
    title: 'Resume'
  	});
};
