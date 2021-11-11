const { request } = require('http');

module.exports = (path) =>
  new Promise((resolve, reject) => {
    if (!path) reject(new Error('path does not exist'));
    if (typeof path !== 'string') reject(new Error('path must be string'));

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
          resolve(JSON.parse(responseBody));
        } catch (error) {
          reject(error);
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.end();
  });
