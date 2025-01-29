// this is our javascript file.
console.log('linked');

// in the html we've linked the 
// marked js package and we can see it's available here
// through the global scope of javascript.
// more information see here: https://marked.js.org/


// select the text input. 
let textInput = document.querySelector('#markdown-input-text');

// make an event listener that listens to keydown on the input
    // call the render preview function
    // you'll see that the preview changes
    // every time we have something.
textInput.addEventListener('keyup', (event) => {
    console.log(event.target.value);
    renderPreview(event.target.value);
});

// create a function call renderPreview
    // select the mark down element
    // use the imported library called marked and parse the new input value.
const renderPreview = (previewText) => {
    document.querySelector('#markdown-preview').innerHTML = marked.parse(previewText);
};