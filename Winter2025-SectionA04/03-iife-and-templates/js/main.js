(function () {
    // Create a function called getUserText. The function
    // accepts a single parameter "label". The function will
    // pass the label to the prompt function and return 
    // the result from the prompt call. The label should have
    // a default value of "Enter text:"
    function getUserText(label = 'Enter text:') {
        return prompt(label);
    }

    // Create a function called updateMain. The function
    // accepts a single parameter called "markup". The function
    // will assign the markup to the innerHTML of the main 
    // element.
    function updateMain(markup) {
        document.querySelector('main').innerHTML = markup;
    }

    let heading = getUserText('Enter heading:');
    let subHeading = getUserText('Enter sub-heading:');
    // call to function taking advantage of default param
    let content = getUserText();

    // old janky gross way
    // let template = '<article>'
    //                + '<h1>' + heading + '</h1>'
    //                + '<p class="sub-heading">' + subHeading + '</p>'
    //                + '<p>' + content + '</p>'
    //                + '</article>';

    let template = `<article>
                    <h1>${heading}</h1>
                    <p class="sub-heading">${subHeading}</p>
                    <p>${content}</p>
                </article>`;

    updateMain(template);
})();