// 3. Create api.js file to interact with our server.
//     - talk about how to use promises when returning a promise.
//     - create the different promises for
//         - post
//         - patch
//     - talk about headers and how we need to specify "application/json" for
//       the content type to make a header.


const BASE_URL = 'http://localhost:3000';

function getAllPosts() {

    return fetch(`${BASE_URL}/posts`)
        .then( (response) => { return response.json() } )
        .then( (posts) => {return posts})
}


// create a new post and save it to the file
function createNewPost( {title, url, score} ) {
    return fetch(`${BASE_URL}/posts`, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title, url, score})
    })
    .then( (response) => { return response.json() } )
    .then( (post) => {return post})
}

// update the score
function updateScore( {id, score} ) {
    return fetch(`${BASE_URL}/posts/${id}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({score: score})
    })
    .then( (response) => { return response.json() } )
    .then( (post) => {return post})
}

export { getAllPosts, createNewPost, updateScore }