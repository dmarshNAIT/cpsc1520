// fetch plain text
fetch('./data/lorem.txt')
    .then((res) => {
        // if (res.ok) {
        // return res.text();
        // } else {
        //     throw Error(`Error ${res.status}`);
        // }
        console.log(res);
        return res.text();
    })
    .then((text) => {
        console.log(text);
        document.querySelector('.text-output').innerText = text;
    });

// fetch json data
fetch('data/people.json')
    .then((res) => {
        // if (res.ok) {
        // return res.json();
        // } else {
        //     throw Error(`Error ${res.status}`);
        // }
        console.log(res);
        return res.json();
    })
    .then((data) => {
        console.log(data)
        // TODO: actually render the properties of the objects
        data.forEach(person => {
            document.querySelector('.json-output').innerHTML += `
                <p>${person.firstName}</p>
            `
        });
    });