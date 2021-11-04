const controllers = require('./controllers');

module.exports = (req, res) => {
  const { url, method, body } = req;

  const { pathname } = new URL(url, `https://${req.headers.host}`);

  if (pathname === '/' && method === 'GET') controllers.home(req, res);

  res.end();
};
