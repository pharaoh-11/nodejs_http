const fetch = require('./fetch');

const path = {
  posts: () => '/posts',
  post: (id) => `/post/${id}`,
  comments: (userId) => `/comments?userId=${userId}`,
};

fetch(path, (err, res) => {
  if (err) console.error(err);

  console.log(res);
});
