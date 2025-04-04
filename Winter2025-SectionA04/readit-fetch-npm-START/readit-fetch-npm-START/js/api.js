// create a function to get all the posts from the server
const getAllPosts = () => {

  const BASE_URL = 'http://localhost:3000';
   
  return fetch(`${BASE_URL}/posts`)
    .then((response) => {
      return response.json();
    })
    .then((postsData) => {
      return postsData;
    });

};

// create a function to create a NEW post

// create a function to UPDATE an existing post

// when we're done, export all of them so we can use them in main.js
export {getAllPosts}