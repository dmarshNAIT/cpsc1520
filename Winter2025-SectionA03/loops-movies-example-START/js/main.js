// this is our javascript file
console.log('hooray, movies!');

// intercept the form and/or required elements
const form = document.querySelector('#movie-filter-form');
const searchBox = form.elements['filter-query'];

// focus on the filter element
searchBox.focus();

// select all movie list items the descendant css selector
// .top-movies-list li
const movieItems = document.querySelectorAll('.top-movies-list li');

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
    // for each movie in the list, check if it INCLUDES the search term
    movieItems.forEach( (movie, index, movieList) => {
        const movieName = movie.innerText.toLowerCase(); // or innerHTML
        if(movieName.includes(searchTerm.toLowerCase())) {
            // if so, show that movie
            movie.classList.remove('hidden-item');
        } else {
            // if not, hide that movie
            movie.classList.add('hidden-item');
        }
    });
}

// challenges:
// make it work for a fuzzy search
// instead of just searching on submit, search on keyup
