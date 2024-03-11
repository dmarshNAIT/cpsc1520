// create an array that represents our dino objects
let dinos = [];

// create HTML element variables
let tableBodyElement = document.querySelector("tbody");

// populate the drop down list of breeds
const dinoBreeds = [
  "Tyrannosaurus Rex",
  "Triceratops",
  "Velociraptor",
  "Stegosaurus",
  "Archaeopteryx",
  "Apatosaurus",
  "Iguanodon",
  "Deinonychus",
].sort();

for (breed of dinoBreeds) {
  document.querySelector(
    "#dino-species"
  ).innerHTML += `<option>${breed}</option>`;
}

// add an event handler to the form to create a new dino object and add it to our array
let formElement = document.querySelector("#input-form");
formElement.elements["dino-name"].focus();

formElement.addEventListener("submit", (event) => {
  event.preventDefault();

  let dinoName = formElement.elements["dino-name"].value;
  let dinoSpecies = formElement.elements["dino-species"].value;
  let dinoYear = Number(formElement.elements["dino-year"].value);
  let eatsMeat = formElement.elements["dino-carnivore"].checked;
  let eatsPlants = formElement.elements["dino-herbivore"].checked;

  //   check if any fields are empty:
  if (
    dinoName.trim().length === 0 ||
    dinoSpecies.trim().length === 0 ||
    dinoYear <= 0 ||
    dinoYear > new Date().getFullYear() ||
    (!eatsMeat && !eatsPlants)
  ) {
    formElement.querySelector(".error").classList.remove("hide");
  }
  // otherwise, form is valid:
  else {
    formElement.querySelector(".error").classList.add("hide");

    let newDino = {
      id: dinos.length,
      name: dinoName,
      species: dinoSpecies,
      birthYear: dinoYear,
      isMeatEater: eatsMeat,
      isPlantEater: eatsPlants,
    };
    dinos.push(newDino);

    // for(property in newDino) {
    //     console.log(`${property}: ${newDino[property]}`);
    // }

    renderTable();

    renderStats();

    formElement.reset();
  }
});

function renderTable() {
  tableBodyElement.innerHTML = "";

  let tableSectionElement = document.querySelector("#table-section");

  if (dinos.length > 0) {
    // show table & hide p
    tableSectionElement.querySelector("table").classList.remove("hide");
    tableSectionElement.querySelector("p").classList.add("hide");
  } else {
    // hide table & show p
    tableSectionElement.querySelector("table").classList.add("hide");
    tableSectionElement.querySelector("p").classList.remove("hide");
  }

  for (dino of dinos) {
    tableBodyElement.innerHTML += `  
            <tr>
                <td>${dino.name}</td>
                <td>${dino.species}</td>
                <td>${getDinoAge(dino.birthYear)}</td>
                <td>${getDinoDiet(dino)}</td>
                <td class="remove" data-dino-id="${dino.id}">REMOVE</td>
            </tr>`;
  }
}

function getDinoAge(year) {
  let today = new Date();
  let currentYear = today.getFullYear();

  return currentYear - year;
}

function getDinoDiet(dino) {
  if (dino.isMeatEater && dino.isPlantEater) {
    return "omnivore";
  } else if (dino.isMeatEater) {
    return "carnivore";
  } else if (dino.isPlantEater) {
    return "herbivore";
  } else {
    return "unknown";
  }
}

function renderStats() {
  if (dinos.length > 0) {
    document.querySelector(".dino-stats").classList.remove("hide");
    document.querySelector(".stats-section p.temp").classList.add("hide");
  } else {
    document.querySelector(".dino-stats").classList.add("hide");
    document.querySelector(".stats-section p.temp").classList.remove("hide");
  }

  document.querySelector("#num-dinos").innerText = dinos.length;
  document.querySelector("#num-carnivores").innerText = countCarnivores();
  document.querySelector("#num-herbivores").innerText = countHerbivores();
  document.querySelector("#num-omnivores").innerText = countOmnivores();
  document.querySelector("#avg-age").innerText = getAverageAge();
}

function countCarnivores() {
  return dinos.reduce((accumulator, dino) => {
    if (dino.isMeatEater && !dino.isPlantEater) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);
}

function countHerbivores() {
  return dinos.reduce((accumulator, dino) => {
    if (dino.isPlantEater && !dino.isMeatEater) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);
}

function countOmnivores() {
  return dinos.reduce((accumulator, dino) => {
    if (dino.isMeatEater && dino.isPlantEater) {
      return accumulator + 1;
    } else {
      return accumulator;
    }
  }, 0);
}

function getAverageAge() {
  let totalAge = dinos.reduce((accumulator, dino) => {
    return accumulator + getDinoAge(dino.birthYear);
  }, 0);

  return totalAge / dinos.length;
}

// add ability to remove dino
tableBodyElement.addEventListener("click", (event) => {
  if (event.target.classList.contains("remove")) {
    let clickedDinoID = event.target.dataset.dinoId;

    console.log(dinos)

    let dinoToRemove;

    // find the dino that needs to be removed
    dinos.forEach((dino, index) => {
      if(dino.id === clickedDinoID) {
        dinoToRemove = index;
      }
    });

    dinos.splice(dinoToRemove, 1);
    renderTable();
    renderStats();
  }
});


// to do: update this on the other version