(function () {
  // this is our javascript file
  console.log('yay movies!');

  // intercept the form and/or required elements
  const form = document.querySelector('#movie-filter-form');
  const searchBox = document.querySelector('.form-control');

  // focus on the filter element
  searchBox.focus();

  // select all movie list items the descendant css selector
  // .top-movies-list li
  const movieListItems = document.querySelectorAll('.top-movies-list li');

  // get the form value and call the function filterItems
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    filterItems(searchBox.value);
  });
  /*

We're going to create a function named "filterItems"
that check each item contains our search query
- if it's not, then we're going to add the "hidden-item" class
- if does include it, we're going to remove the "hidden-item" class

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

*/
  const filterItems = (searchTerm) => {
    movieListItems.forEach((movieItem, index, movieList) => {
      // for each movie item, check if it contains the search term
      if (
        movieItem.innerText.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        // if so, unhide it
        movieItem.classList.remove('hidden-item');
      } else {
        // otherwise, hide it
        movieItem.classList.add('hidden-item');
      }
    });
  };
  
})(); // immediately-invoked function expression
