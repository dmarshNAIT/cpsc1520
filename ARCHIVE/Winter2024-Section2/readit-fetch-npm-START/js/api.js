function getAllPosts() {
    // fetch from that back end server
    // http://localhost:3000/posts
    let postData = fetch('http://localhost:3000/posts')
    // extract the json 
    .then( (response) => {
        // console.log(response);
        return response.json();
    } )
    // return the contents
    .then( (posts) => {
        // console.log(posts);
        return posts;
    }) 

    return postData;
}


function createNewPost({title, url, score}) {
    // fetch from that back end server
    // http://localhost:3000/posts
    let postData = fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({title, url, score})
    })
    // extract the json 
    .then( (response) => {
        console.log(response);
        return response.json();
    } )
    // return the contents
    .then( (posts) => {
        console.log(posts);
        return posts;
    }) 
    return postData;
}

function updateScore({id, score}) {
    let postData = fetch(`http://localhost:3000/posts/${id}`, {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({score})
    })
    // extract the json 
    .then( (response) => {
        // console.log(response);
        return response.json();
    } )
    // return the contents
    .then( (posts) => {
        // console.log(posts);
        return posts;
    }) 
    return postData;
}

export { getAllPosts, createNewPost, updateScore }