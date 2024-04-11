// where we do our API calls

// create a function called getAllPosts()
// this will fetch data from the backend server
// http://localhost:3000/posts
// return the contents of the json

/**
 * Fetches post data from a hardcoded back-end server
 * @returns {Object} contents of the db.json posts array
 */
function getAllPosts() {
    // fetch from the backend
    let result = fetch('http://localhost:3000/posts')
    // parse the JSON
    .then( (response) => {
        console.log(response);
        return response.json();
    })
    // return its contents
    .then( (postData) => {
        console.log(postData);
        return postData;
    });

    return result;
}

function createNewPost({title, url, score}){
    let result = fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title, url, score})
      })
    .then( (response) => {
        return response.json();
    })
    .then( (postData) => {
        return postData;
    });
    return result;
}

function updateScore({id, score}){
    let result = fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({score: score})
      })
    .then( (response) => {
        return response.json();
    })
    .then( (postData) => {
        return postData;
    });
    return result;
}



// export getAllPosts
export { getAllPosts, createNewPost, updateScore };