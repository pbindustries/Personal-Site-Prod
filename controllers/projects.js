/**
 * GET /
 * Projects page.
 */
exports.index = (req, res) => {
  res.render('projects', {
    title: 'projects'
  });
};
