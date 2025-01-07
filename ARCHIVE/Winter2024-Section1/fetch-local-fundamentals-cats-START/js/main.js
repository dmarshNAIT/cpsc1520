/*
Fetch Fundamentals

This example requires you to send a local fetch request for a JSON
file, and to render the following HTML for each of the returned objects
in the array.
    
Sample HTML
    <div class="mt-3 card" >
        <img class="card-img-top" src="CAT PICTURE HERE" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">CAT NAME HERE </h5>
        <p class="card-text">CAT TEXT HERE</p>
        </div>
    </div>
*/

// Use the following list as a guide to complete the task:
(function () {
// - select any requried elements from the document


// - create a getCats function that will fetch the local cats-with-jobs.json file
//     - the function should accept a function parameter, that will be called 
//       when the data has been resolved, and passed the array of fetched cats
//       as a single argument
function getCats(callbackFunction){
  // make a request to fetch the local file
  fetch('data/cats-with-jobs.json')
  // get the json contents
  .then( (response) => response.json() )
  // provide those contents to our callback function
  .then( (catInfo) => callbackFunction(catInfo) );
}

// - create a renderCats function that will accept a single parameter, which
//   should be an array of cat data
//     - the function should iterate over the array (e.g. use .forEach()) and render
//       each cat using the template HTML provided above
function renderCats(catArray){
  const catElement = document.querySelector('.cat-display');

  catElement.innerHTML = '';

  catArray.forEach((cat) => {
    catElement.innerHTML += `    
      <div class="mt-3 card" >
        <img class="card-img-top" src="${cat.picture}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${cat.name}</h5>
        <p class="card-text">${cat.text}</p>
        </div>
      </div>`;

  });

}

// - call the getCats function, and pass in the renderCats function as an argument
//     - when the page loads, you should now see the cats rendered on the page
getCats(renderCats);

})();