// your js here...
let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImg = 0;
let idx;

// display the current image
document.querySelector('.carousel>img').src = 'images/' + images[0]; 

// add the appropriate number of selector bullets
// TODO: 

// highlight the first bullet as 'active'
// TODO:

// add event listener for carousel controls
document.querySelector('.carousel').addEventListener('click', function (evt){
    let target = evt.target;
    if (target.classList.contains('control')) {
        if (target.classList.contains('next')) {
            // move to the next index in the array
            currentImg += 1;
        } else if (target.classList.contains('prev')){
            // move to the previous index in the array
            currentImg -= 1;
        }
		// selector bullet clicked
    	// TODO:
		
        // display the new current image
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];

        // update the active selector bullet
        // TODO:

    }
}); 


// TODO: add another event listener