/**
 * GET /
 * Cool Stuff page.
 */
exports.index = (req, res) => {
  res.render('coolStuff', {
    title: 'coolStuff'
  });
};
