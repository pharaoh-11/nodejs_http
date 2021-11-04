const services = require('../services');

function home(req, res) {
  const { message, code } = services.home();
  res.write(message);
  res.statusCode = code;
  res.end();
}

function notFound(req, res) {
  const { message, code } = services.notFound();
  res.statusCode = code;
  res.write(message);
  res.end();
}

module.exports = {
  home,
  notFound,
};
