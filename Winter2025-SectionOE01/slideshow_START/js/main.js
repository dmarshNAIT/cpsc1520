// your js here...
let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImg = 0;
let idx;
const imageTracker = document.querySelector('.image-tracker');

// display the current image
document.querySelector('.carousel>img').src = 'images/' + images[0]; 

// add the appropriate number of selector bullets
// for each element in the array, add <span>
// <span class="control" data-idx="INDEX">&bull;</span>

// v1: using forEach
// for(let index = 0; index < images.length; index++) {
//     imageTracker.innerHTML += `<span class="control" data-idx="${index}">&bull;</span>`;
// };

// v2: using for/of
let index = 0;
for(let image of images) {
    imageTracker.innerHTML += `<span class="control" data-idx="${index}">&bull;</span>`;
    index++;
};

// highlight the first bullet as 'active'
// instead of document.querySelector, we can query inside of ANY html element:
let activeBullet = imageTracker.querySelector('span.control');
activeBullet.classList.add('active');

// add event listener for carousel controls
document.querySelector('.carousel').addEventListener('click', function (evt){
    let target = evt.target;
    if (target.classList.contains('control')) {
        if (target.classList.contains('next')) {
            // move to the next index in the array
            currentImg += 1;
            if (currentImg == images.length) {
                currentImg = 0;
            }

        } else if (target.classList.contains('prev')){
            // move to the previous index in the array
            currentImg -= 1;
            // we don't want to go into negative indexes; if that happens, correct:
            if (currentImg === -1) {
                currentImg = images.length - 1;
            }

        } else {
            // selector bullet clicked
            currentImg = Number(target.dataset.idx);
        }
		//console.log("the current image # is", currentImg);

        // display the new current image
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];

        // update the active selector bullet
        // remove the active class
        imageTracker.querySelector('span.active').classList.remove('active');
        // add it to the new active element
        imageTracker.querySelectorAll('span')[currentImg].classList.add('active');
    }
}); 

// TODO: what happens if we scroll too far?

// TODO: add another event listener