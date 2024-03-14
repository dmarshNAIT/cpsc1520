// Step 1: create an array that represents our dino objects
let dinos = [];

// Step 2: create HTML element variable for the table body
const tableBodyElement = document.querySelector('tbody');

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

// Step 3: populate the drop down list of breeds
for(breed of dinoBreeds) { // for each breed in the dinoBreeds array
  document.querySelector('#dino-species').innerHTML += '<option>' + breed + '</option>';
}

// Step 4: create a no-param function called renderTable()
function renderTable() {
  tableBodyElement.innerHTML = '';

  dinos.forEach((dino) => {
    tableBodyElement.innerHTML += `
     <tr>
        <td>${dino.name}</td>
        <td>${dino.species}</td>
        <td>${getAge(dino.birthYear)}</td>
        <td>${getDiet(dino.isMeatEater, dino.isPlantEater)}</td>
        <td class="remove" data-dino-id="INSERT NUMBER">REMOVE</td>
      </tr>
    `;
  });
} 

function getAge(year) {
  const today = new Date();
  const currentYear = today.getFullYear();
  return currentYear - year;
}

function getDiet(eatsMeat, eatsPlants){
  if(eatsMeat && eatsPlants) {
    return 'omnivore';
  } else if(eatsMeat) {
    return 'carnivore'
  } else if(eatsPlants) {
    return 'herbivore';
  } else {
    return 'unknown';
  }
}

// TO DO Step 5: create a no-param function called renderStats()
function renderStats(){
  // calculate # of dinos
  document.querySelector('#num-dinos').innerText = dinos.length;

  // calculate # of carnivores
  document.querySelector('#num-carnivores').innerText = countCarnivores();

  // calculate the # of herbivores
  document.querySelector('#num-herbivores').innerText = countHerbivores();

  // calculate the # of omnivores
  document.querySelector('#num-omnivores').innerText = countOmnivores();

  // calculate the average age
  document.querySelector('#avg-age').innerText = calculateAverageAge();

}

function countCarnivores() {
  // iterate through our array, counting the # of carnivores
  // eats meat but does not eat plants
  return dinos.filter( dino =>  dino.isMeatEater && !dino.isPlantEater ).length;
  // could have also used reduce()
}

function countHerbivores() {
  // iterate through our array, counting the # of herbivores
  return dinos.filter( dino =>  !dino.isMeatEater && dino.isPlantEater ).length;
  // could have also used reduce()
}

function countOmnivores() {
  // iterate through our array, counting the # of omnivores
  return dinos.filter( dino =>  dino.isMeatEater && dino.isPlantEater ).length;
  // could have also used reduce()
}

function calculateAverageAge(){
  // average = total sum / # of dinosaurs
  let sumOfAges = dinos.reduce((accumulator, dino) => 
     accumulator + getAge(dino.birthYear)
  , 0);

  return sumOfAges / dinos.length;
}

const formElement = document.querySelector('#input-form');

// Step 6: add an event handler to the form
formElement.addEventListener('submit', (event) => {
  event.preventDefault();

  // 1. get form values
  let dinoName = formElement.elements['dino-name'].value;
  let dinoSpecies = formElement.elements['dino-species'].value;
  let dinoYear = formElement.elements['dino-year'].value;
  let dinoCarnivore = formElement.elements['dino-carnivore'].checked;
  let dinoHerbivore = formElement.elements['dino-herbivore'].checked;

  // 2. create a new dino with the following properties: id, name, species, birthYear, isMeatEater, and isPlantEater
  const newDino = {
    id: dinos.length, 
    name: dinoName, 
    species: dinoSpecies, 
    birthYear: dinoYear, 
    isMeatEater: dinoCarnivore, 
    isPlantEater:  dinoHerbivore
  }

  // 3. add the new dino object to the array
  dinos.push(newDino);

  // 4. call renderTable()
  renderTable();

  // 5. call renderStats()
  renderStats();

});

// CHALLENGE: using a loop, print out all properties & their values to the console
// CHALLENGE: add input validation: name cannot be empty, species cannot be empty, year cannot be negative or in the future, and a dino must check at least one box

// CHALLENGE TO DO Step 7: add ability to remove dino


// TO DO: finishing touches: do we need any focus or reset?


// CHALLENGE TO DO Step 8: delete the following & add the missing logic!
// if there are no dinosaurs, we should show the .temp message.
// otherwise, we'll show the table & stats
document.querySelector("#table-section table").classList.remove("hide");
document.querySelector("#table-section p").classList.add("hide");
document.querySelector(".dino-stats").classList.remove("hide");
document.querySelector(".stats-section p.temp").classList.add("hide");