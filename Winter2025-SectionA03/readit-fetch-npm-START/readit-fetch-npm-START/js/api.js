const BASE_URL = 'http://localhost:3000';

// a function that fetches ALL the posts from the server
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

// a function that POSTs a single post to the server
const createNewPost = ({ title, url, score }) => {
  return fetch(`${BASE_URL}/posts`, {
    method: 'POST',
    headers: {
      // headers help specify more information that the server needs.
      'Content-Type': 'application/json'
    }, // above this just means that we're saying "we're sending json" so the server understands.
    body: JSON.stringify({ title, url, score })
  })
    .then((response) => {
      return response.json();
    })
    .then((post) => {
      console.log(post);
      return post;
    });
};

//  a function that UPDATEs a single post on the server
const updateScore = ({ id, score }) => {
  return fetch(`${BASE_URL}/posts/${id}`, {
    method: 'PATCH',
    headers: {
      // headers help specify more information that the server needs.
      'Content-Type': 'application/json'
    }, // above this just means that we're saying "we're sending json" so the server understands.
    body: JSON.stringify({ score: score })
  })
    .then((response) => {
      return response.json();
    })
    .then((post) => {
      console.log(post);
      return post;
    });
};


// export 'em
export { getAllPosts , createNewPost, updateScore};
