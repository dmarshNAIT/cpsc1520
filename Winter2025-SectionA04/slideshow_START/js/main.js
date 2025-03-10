// your js here...
let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImg = 0;
let idx;
const imageTracker = document.querySelector('.image-tracker');

// display the current image
document.querySelector('.carousel>img').src = 'images/' + images[0]; 

// add the appropriate number of selector bullets
// <span class="control" data-index="INDEX">&bull;</span>
images.forEach( (element, index) => {
    imageTracker.innerHTML += `<span class="control" data-index="${index}">&bull;</span>`
});

// highlight the first bullet as 'active'
imageTracker.querySelector('span').classList.add('active');

// add event listener for carousel controls
document.querySelector('.carousel').addEventListener('click', function (evt){
    let target = evt.target;
    if (target.classList.contains('control')) {
        if (target.classList.contains('next')) {
            // move to the next index in the array
            currentImg += 1;
            // if we've gone beyond the end of the array, loop back to the start:
            if (currentImg >= images.length) currentImg = 0;
        } else if (target.classList.contains('prev')){
            // move to the previous index in the array
            currentImg -= 1;
            // if we've gone beyond the start of the array, loop back to the end:
            if (currentImg < 0) currentImg = images.length - 1;
        } else {
            // selector bullet clicked
            currentImg = Number(target.dataset.index);
            //console.log(currentImg);
        }
		
        // display the new current image
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];

        // update the active selector bullet
        imageTracker.querySelector('.active').classList.remove('active');
        imageTracker.querySelectorAll('span')[currentImg].classList.add('active');
    }
}); 

// TODO: add keyboard functionality
document.addEventListener('keydown', (event) => {

    console.log('the event key is ', event.key);
    console.log('the event code is ', event.code);

    // if I pressed arrowLeft, simulate "prev"
    if(event.code === 'ArrowLeft') {
        // create a mouse event
        const click = new MouseEvent('click',{bubbles: true});
        // & add it to the previous control button
        document.querySelector('.prev').dispatchEvent(click);
    }
    // if I pressed arrowRight, simulate "next"
    else if (event.code === 'ArrowRight'){
        // create a mouse event
        const click = new MouseEvent('click',{bubbles: true});
        // & add it to the next control button
        document.querySelector('.next').dispatchEvent(click);
    }
});