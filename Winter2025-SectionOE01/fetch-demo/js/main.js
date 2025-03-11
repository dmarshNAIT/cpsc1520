// fetch plain text
fetch('data/lorem.txt')
    .then((response) => {
        return response.text();
        // if (res.ok) {
        // return res.text();
        // } else {
        //     throw Error(`Error ${res.status}`);
        // }
    })
    .then((text) => {
         document.querySelector('.text-output').innerText = text;
    });

// fetch json data
fetch('./data/people.json')
    .then((response) => {
        // console.log(response);
        return response.json();
        // if (res.ok) {
        // return res.json();
        // } else {
        //     throw Error(`Error ${res.status}`);
        // }
    })
    .then((data) => {
         //console.log(data)
        // // TODO: actually render the properties of the objects
        data.forEach(person => {
            document.querySelector('.json-output').innerHTML += `
                <p>${person.firstName}</p>
            `
        });
    });