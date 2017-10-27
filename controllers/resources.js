/**
 * GET /
 * Resources page.
 */
exports.index = (req, res) => {
  res.render('resources', {
    title: 'Resources'
  });
};
