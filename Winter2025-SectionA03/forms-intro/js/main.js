(function () {
    document.querySelector('form').addEventListener('submit', (evt) => {
        // the target of the submit event is the 'form'
        // element itself (you can submit the form by
        // either pressing <enter> or clicking the submit
        // button).
        // e.g. evt.target will give access to the form
        
        // don't submit, ever
        evt.preventDefault();

        console.log('Submitted...');

        // access the div.output
        let output = document.querySelector('.output');

        // access the input txt-input
        // the elements property of a form element gives access
        // to the form control elements in the form (e.g. input and button)
        // You can use either '.validName' access to the name (if it's a valid name)
        // or (as shown below) '[invalid-name]' for names that do not
        // adhere to JavaScript naming conventions
        let txtInputValue = evt.target.elements['txt-input'].value;
        let passInputValue = evt.target.elements['pass-input'].value;
        let radioInputValue = evt.target.elements['radio-input'].value;
        let checkboxInput = evt.target.elements['checkbox-input'];
        let selectInputValue = evt.target.elements['select-input'].value;
        let textareaInputValue = evt.target.elements['textarea-input'].value;

        // display the value in the output
        output.innerHTML = `<p>Text: ${txtInputValue}</p>`;
        output.innerHTML += `<p>Password: ${passInputValue}</p>`;
        output.innerHTML += `<p>Radio: ${radioInputValue}</p>`;

        // would normally use a loop, but we haven't learned about loops yet
        if (checkboxInput[0].checked) {
            output.innerHTML += `<p>Checkbox: ${checkboxInput[0].value}</p>`;
        }
        if (checkboxInput[1].checked) {
            output.innerHTML += `<p>Checkbox: ${checkboxInput[1].value}</p>`;
        }
        if (checkboxInput[2].checked) {
            output.innerHTML += `<p>Checkbox: ${checkboxInput[2].value}</p>`;
        }

        output.innerHTML += `<p>Select: ${selectInputValue}</p>`;
        output.innerHTML += `<p>Textarea: ${textareaInputValue}</p>`;
    });
})();