// Fetch Fundamentals
// In this example we're going to generate random pictures of dogs.
// 1. Select the random dog button and add a click event
//     listener on it.
const buttonElement = document.querySelector('#new-dog-button');

buttonElement.addEventListener('click', () => {
    console.log('entering event handler....');
    // v1:
    // getRandomDog(logInfo); // we are using the name of the function as the param to getRandomDog()
    // v2:
    getRandomDog(setImage);
});

// 2. Create the function get random dog with the fetch api.
//     - documentation for the dog api here https://dog.ceo/dog-api/
//     - explore and display what the promise returns.
function logInfo(info) {
    console.log(info);
}

function getRandomDog(callbackFunction) {
    // request the dog URL
    fetch('https://dog.ceo/api/breeds/image/random')
    // get the JSON contents
    .then((response) => response.json())
    // provide the contents to our callbackFunction
    .then( (dogData) => { callbackFunction(dogData) });
}

// 3. Create a function that will select the image 
function setImage(dogInfo) {
    const imageElement = document.querySelector('.dog-image');
    imageElement.setAttribute('src', dogInfo.message);
}

// 4. Call the get random dog function in your event listener,
//     and call it when the page loads.
getRandomDog(setImage);