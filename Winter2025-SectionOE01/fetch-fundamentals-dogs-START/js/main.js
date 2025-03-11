/*
Fetch Fundamentals
In this example we're going to generate random pictures of dogs.
1. Select the random dog button and add a click event
    listener on it.
2. Create the function get random dog with the fetch api.
    - documentation for the dog api here https://dog.ceo/dog-api/
    - explore and display what the promise returns.
3. Create a function that will select the image 
4. Call the get random dog function in your event listener,
    and call it when the page loads.
*/

const button = document.getElementById('new-dog-button');

button.addEventListener('click', (params) => {
    getRandomDog(renderDog);
});

const getRandomDog = (callback) => {
    // fetch --> then --> then
    fetch('https://dog.ceo/api/breeds/image/random')
    .then( (response) => response.json())
    .then( (dogData) => { callback(dogData)});
}

const logDogInfo = (dogInfo) => {
    // print dogInfo to the console
    console.log(dogInfo);
}

const renderDog = (dogInfo) => {
    // setting a value for src attribute
    const dogImage = document.querySelector('.dog-image');
   // v1: modify the src attribute of the HTML element:
    // dogImage.src = dogInfo.message;
    // v2: using setAttribute()
    dogImage.setAttribute('src', dogInfo.message);
}

getRandomDog(renderDog);
