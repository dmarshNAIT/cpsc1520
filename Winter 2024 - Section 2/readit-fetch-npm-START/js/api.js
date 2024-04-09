function getAllPosts() {
    // fetch from that back end server
    // http://localhost:3000/posts
    let postData = fetch('http://localhost:3000/posts')
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


// TO DO: create post function

// TO DO: create patch function

export { getAllPosts }