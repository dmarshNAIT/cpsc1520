// your js here...
let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImg = 0;
let idx;

// display the current image
document.querySelector('.carousel>img').src = 'images/' + images[0]; 

let imageTrackerElement = document.querySelector('.image-tracker');

// add the appropriate number of selector bullets
for(let i = 0; i < images.length; i++){
    imageTrackerElement.innerHTML +=
        `<span class="control" data-idx="${i}">&bull;</span>`;
}

// highlight the first bullet as 'active'
// create a variable that points to the first bullet
// v1:
// let firstBullet = document.querySelector('.image-tracker span');
// v2:
let firstBullet = imageTrackerElement.querySelector('span');
// add the 'active' class to that variable
firstBullet.classList.add('active');

// add event listener for carousel controls
document.querySelector('.carousel').addEventListener('click', function (evt){
    let target = evt.target;
    if (target.classList.contains('control')) {
        if (target.classList.contains('next')) {
            // move to the next index in the array
            currentImg += 1;
            // if we've gone past the end of the array,
            // set currentImg = 0
            if(currentImg > images.length - 1) {
                currentImg = 0;
            }

        } else if (target.classList.contains('prev')){
            // move to the previous index in the array
            currentImg -= 1;
            // if we've gone past the start of the array,
            // set currentImg = length - 1
            if(currentImg < 0){
                currentImg = images.length - 1;
            }

        } else {
		// selector bullet clicked
            currentImg = target.dataset.idx;
        }
		
        // display the new current image
        document.querySelector('.carousel>img').src = 'images/' + images[currentImg];

        // update the active selector bullet
        // remove the active class from the current bullet
        imageTrackerElement.querySelector('span.active').classList.remove('active');
        // add the active class to the newly selected bullet
        let spanList = imageTrackerElement.querySelectorAll('span');
        spanList[currentImg].classList.add('active');
    }
}); 

// add another event listener to the page
// that is listening for a "keydown"
document.addEventListener('keydown', (event) => {
    console.log('the event key is ' + event.key);
    console.log('the event code is ' + event.code);

    switch(event.code) {

        case 'ArrowLeft':
        // if the user typed ArrowLeft,
            // we will create & send a click event on the .prev element
            click = new MouseEvent('click', {'bubbles': true});
            document.querySelector('.prev').dispatchEvent(click);
            break;

        case 'ArrowRight':
        // if the user typed ArrowRight,
            // we will create & send a click event on the .next element
            click = new MouseEvent('click', {'bubbles': true});
            document.querySelector('.next').dispatchEvent(click);
            break;

    }
});