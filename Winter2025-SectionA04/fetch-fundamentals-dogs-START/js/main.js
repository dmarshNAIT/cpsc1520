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

// getRandomDog function
const getRandomDog = (callbackFunction) => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => callbackFunction(data));
}

// setDogPicture function
const setDogPicture = (dogObject) => {
    const dogImage = document.querySelector('.dog-image');
    // v1:
    //dogImage.src = dogObject.message;
    // v2:
    dogImage.setAttribute('src', dogObject.message);
}
getRandomDog(setDogPicture);

// add an event listener to the button which will call getRandomDog
document
.getElementById('new-dog-button')
.addEventListener('click', 
    () => getRandomDog(setDogPicture))