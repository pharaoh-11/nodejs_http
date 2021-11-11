const { request } = require('http');

module.exports = (path, callback) => {
  if (typeof callback !== 'function')
    throw new Error('second argument must be a function');
  if (!path) callback(new Error('path does not exist'));
  if (typeof path !== 'string') callback(new Error('path must be string'));

  const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path,
    method: 'GET',
  };

  const req = request(options, (res) => {
    const responseBuffer = [];

    res.on('data', (chunk) => {
      responseBuffer.push(chunk);
    });
    res.on('end', () => {
      try {
        const responseBody = Buffer.concat(responseBuffer).toString();
        callback(null, JSON.parse(responseBody));
      } catch (error) {
        callback(error);
      }
    });
  });

  req.on('error', (error) => {
    callback(error);
  });

  req.end();
};
