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

Use the following list as a guide to complete the task:
*/

// - select any requried elements from the document

// - create a getCats function that will fetch the local cats-with-jobs.json file
//     - the function should accept a function parameter, that will be called
//       when the data has been resolved, and passed the array of fetched cats
//       as a single argument

(async function () {
  // async is needed because we have await statements within this function

  /**
   * Fetch data from a local JSON file
   * @returns an array of cat objects
   */
  const getCats = async () => {
    // await is needed because fetch returns a Promise
    let response = await fetch('data/cats-with-jobs.json');
    let catData = await response.json();
    return catData;
  }

  // test:
  getCats();

  // - create a renderCats function that will accept a single parameter, which
  //   should be an array of cat data
  //     - the function should iterate over the array (e.g. use .forEach()) and render
  //       each cat using the template HTML provided above
  const renderCats = (catData) => {
    const catDisplay = document.querySelector('.cat-display');

    catDisplay.innerHTML = '';

    for (let cat of catData) {
      catDisplay.innerHTML += `    <div class="mt-3 card" >
        <img class="card-img-top" src="${cat.picture}" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">${cat.name}</h5>
        <p class="card-text">${cat.text}</p>
        </div>
    </div>`;
    }
  };

  renderCats(await getCats());
})();
