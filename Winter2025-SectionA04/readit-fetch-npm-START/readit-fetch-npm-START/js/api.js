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
const createNewPost = ({title, url, score}) => {
  return fetch(`${BASE_URL}/posts`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({title, url, score}) 
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((post) => {
      return post;
    });
}

// create a function to UPDATE an existing post
const updatePost = (params) => {
  return fetch(`${BASE_URL}/posts`, //TODO: replace with actual URL
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params) // TODO: replace with actual params
    }
  )
    .then((response) => {
      return response.json();
    })
    .then((post) => {
      return post;
    });
}

// when we're done, export all of them so we can use them in main.js
export {getAllPosts, createNewPost, updatePost};