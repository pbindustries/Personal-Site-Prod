
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

/**
 * GET /
 * Buddy page.
 */
exports.buddy = (req, res) => {
  res.render('coolStuff/buddy', {
    title: 'Buddy'
  });
};

/**
 * GET /
 * Boo page.
 */
exports.boo = (req, res) => {
  res.render('coolStuff/boo', {
    title: 'Boo'
  });
};

/**
 * GET /
 * Articles page.
 */
exports.articles = (req, res) => {
  res.render('coolStuff/articles', {
    title: 'Articles'
  });
};

/**
 * GET /
 * About page.
 */
exports.about = (req, res) => {
  res.render('about', {
    title: 'About'
  });
};

/**
 * GET /
 * Game Rules page.
 */
exports.rules = (req, res) => {
  res.render('rules', {
    title: 'Rules'
  });
};

