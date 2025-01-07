// Fetch Fundamentals
// In this example we're going to generate random pictures of dogs.

// 1. Select the random dog button and add a click event
//     listener on it.
const buttonElement = document.querySelector('#new-dog-button');
// initialize our dog photo:
getRandomDog(setDogImage);

buttonElement.addEventListener('click', () => {
    console.log('entering the event listener....');
    // v1:
    // getRandomDog(logInfo);
    // v2:
    getRandomDog(setDogImage);
});

// 2. Create the function get random dog with the fetch api.
//     - documentation for the dog api here https://dog.ceo/dog-api/
//     - explore and display what the promise returns.
function getRandomDog(callbackFunction) {
    // use the fetch api to access the random dog URL
    fetch('https://dog.ceo/api/breeds/image/random')
    // extract the contents of the json data
    .then( (response) => response.json() )
    // call a function to do something with those data
    .then( (dogData) => {
        callbackFunction(dogData);
    } );
}

function logInfo(jsonData){
    console.log(jsonData);
}

const imageElement = document.querySelector('.dog-image');
function setDogImage(jsonData) {
    imageElement.setAttribute('src', jsonData.message);
}

// 3. Create a function that will select the image 
// 4. Call the get random dog function in your event listener,
//     and call it when the page loads.






