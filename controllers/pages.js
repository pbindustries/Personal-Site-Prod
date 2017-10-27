/**
 * GET /
 * Cool Stuff page.
 */
exports.coolStuff = (req, res) => {
  res.render('coolStuff', {
    title: 'coolStuff'
  });
};

/**
 * GET /
 * Home page.
 */
exports.home = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

/**
 * GET /
 * Projects page.
 */
exports.projects = (req, res) => {
  res.render('projects', {
    title: 'Projects'
  });
};

/**
 * GET /
 * Resources page.
 */
exports.resources = (req, res) => {
  res.render('resources', {
    title: 'Resources'
  });
};

/**
 * GET /
 * Resume page.
 */
exports.resume = (req, res) => {
  res.render('resume', {
    title: 'Resume'
  });
};
