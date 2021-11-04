const services = require('../services');

function home(req, res) {
  const response = services.home();
  res.write(response);
  res.end();
}

function notFound(req, res) {
  const response = services.notFound();
  res.write(response);
  res.end();
}

module.exports = {
  home,
  notFound,
};
