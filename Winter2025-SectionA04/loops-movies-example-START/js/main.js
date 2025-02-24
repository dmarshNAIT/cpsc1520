(function () {

    // this is our javascript file
    console.log('yay, movies');

    // intercept the form and/or required elements
    const form = document.querySelector('#movie-filter-form');
    const searchBox = form.elements['filter-query'];
    // console.log(form);
    // console.log(searchBox);

    // focus on the filter element
    searchBox.focus();

    // select all movie list items the descendant css selector
    // .top-movies-list li
    const movieItems = document.querySelectorAll('.top-movies-list li');
    // console.log(movieItems)

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
        // for each movie, check if it contains the search term

        movieItems.forEach((movie, index, movieList) => {
            // check if the movie name contains the search term
            // if so, unhide that movie
            // otherwise, hide that movie (+ the hidden-item class)
            const movieName = movie.innerText.toLowerCase();

            if (movieName.includes(searchTerm.toLowerCase())) {
                movie.classList.remove('hidden-item');
            } else {
                movie.classList.add('hidden-item');
            }
        });

    }


})();