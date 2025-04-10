const BASE_URL = 'http://localhost:3000';

// create a function to get all the posts from the server
const getAllPosts = () => {

   
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
const updatePost = ({id, score}) => {
  return fetch(`${BASE_URL}/posts/${id}`, 
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({score: score}) 
      // the first score is the name of the property
      // the second score is the value of the property (in this case, the parameter value)
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