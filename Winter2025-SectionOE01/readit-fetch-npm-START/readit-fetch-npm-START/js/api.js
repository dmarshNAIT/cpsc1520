const BASE_URL = 'http://localhost:3000';

// create a function to fetch ALl the posts
const getAllPosts = () => {
  return fetch(`${BASE_URL}/posts`)
    .then((response) => {
      return response.json();
    })
    .then((postsData) => {
      console.log(postsData);
      return postsData;
    });
};

// create a function to add a single new post
// json-server will generate a id if we don't provide one
const createNewPost = ({ title, url, score }) => {
  return fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, url, score }),
  })
    .then((response) => {
      return response.json();
    })
    .then((post) => {
      console.log(post);
      return post;
    });
};

// create a function that lets us update the score of an existing post

// export all these functions, so they can be used in main.js
export { getAllPosts, createNewPost };
