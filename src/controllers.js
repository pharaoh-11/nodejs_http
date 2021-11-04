const services = require('./services');

function home(req, res) {
  const response = services.home();
  res.write(response);
  res.end();
}

module.exports = {
  home,
};
