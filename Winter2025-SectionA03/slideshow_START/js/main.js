// your js here...
let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImg = 0;
let idx;
const imageTracker = document.querySelector('.image-tracker');

// display the current image
document.querySelector('.carousel>img').src = 'images/' + images[0]; 

// add the appropriate number of selector bullets
// <span class="control" data-index="INDEX">&bull;</span>
for(let index = 0; index < images.length; index++){
    imageTracker.innerHTML += `<span class="control" data-index="${index}">&bull;</span>`;
};

// highlight the first bullet as 'active'
// add the class "active" to the first span
imageTracker.querySelector('span').classList.add('active');

// add event listener for carousel controls
document.querySelector('.carousel').addEventListener('click', function (evt){
    let target = evt.target;
    if (target.classList.contains('control')) {
        if (target.classList.contains('next')) {
            // move to the next index in the array
            currentImg += 1;
            // TODO: if we are at the end of the array, wrap around to the beginning
        } else if (target.classList.contains('prev')){
            // move to the previous index in the array
            currentImg -= 1;
            // TODO: if we are at the beginning of the array, wrap around to the end
        } else {
            // selector bullet clicked
            // update the currentImg to the index of the bullet clicked
            currentImg = target.dataset.index;
        }
        // display the new current image
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];

        // update the active selector bullet
        // remove the active bullet from one
        imageTracker.querySelector('.active').classList.remove('active');
        // TODO: add it to another
        // CHALLENGE:
    }
}); 

// TODO: make this work for keyboard events too!