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

// TO DO: 
// create posts
// fetch will still have posts as the first arg, and the following will be the 2nd argument:
// {
//     method: 'POST',
//     headers: { // headers help specify more information that the server needs.
//       "Content-Type": "application/json" 
//     }, // above this just means that we're saying "we're sending json" so the server understands.
//     body: JSON.stringify({title, url, score})
//   }
// patch posts
// the 2nd argument will be:
// {
//     method: 'PATCH',
//     headers: { 
//       "Content-Type": "application/json" 
//     }, 
//     body: JSON.stringify({
//       score: score
//     })
//  }


// export getAllPosts
export { getAllPosts };