
// Main Pages /////////////////////////////////
/**
 * GET /
 * Home page.
 */
exports.home = (req, res) => {
  res.render('home', {
    title: 'Home'
  });
};

// My Things ////////////////////////////////////
/**
 * GET /
 * About page.
 */
exports.about = (req, res) => {
  res.render('myThings/about', {
    title: 'About'
  });
};

/**
 * GET /
 * Resume page.
 */
exports.resume = (req, res) => {
  res.render('myThings/resume', {
    title: 'Resume'
  });
};

/**
 * GET /
 * Project Summaries
 */
exports.summary = (req, res) => {
  res.render('myProjects/summary', {
    title: 'Summary'
  });
};

/**
 * GET /
 * Game Rules page.
 */
exports.rules = (req, res) => {
  res.render('myProjects/rules', {
    title: 'Rules'
  });
};

// Other Stuff ////////////////////////////////////
/**
 * GET /
 * Resources page.
 */
exports.resources = (req, res) => {
  res.render('otherStuff/resources', {
    title: 'Resources'
  });
};

/**
 * GET /
 * Buddy page.
 */
exports.buddy = (req, res) => {
  res.render('otherStuff/buddy', {
    title: 'Buddy'
  });
};

/**
 * GET /
 * Boo page.
 */
exports.boo = (req, res) => {
  res.render('otherStuff/boo', {
    title: 'Boo'
  });
};

/**
 * GET /
 * Articles page.
 */
exports.articles = (req, res) => {
  res.render('otherStuff/articles', {
    title: 'Articles'
  });
};

/**
 * GET /
 * Problematic page.
 */
exports.problematic = (req, res) => {
  res.render('otherStuff/problematic', {
    title: 'Problematic'
  });
};

// For This Site ///////////////////////////////////
/**
 * GET /
 * Reading List Page
 */
exports.read = (req, res) => {
  res.render('forThisSite/read', {
    title: 'Read'
  });
};









