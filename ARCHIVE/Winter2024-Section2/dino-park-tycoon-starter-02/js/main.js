// TODO Step 1: create an array that represents our dino objects


// TODO Step 2: create HTML element variable for the table body


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

// TO DO Step 3: populate the drop down list of breeds

// HTML syntax:
// <option>BREED</option>


// TO DO Step 4: create a no-param function called renderTable()

// HTML syntax:
//  <tbody>  
//   <tr>
//     <td>INSERT NAME</td>
//     <td>INSERT SPECIES</td>
//     <td>INSERT AGE</td>
//     <td>INSERT DIET</td>
//     <td class="remove" data-dino-id="INSERT NUMBER">REMOVE</td>
//   </tr>
// </tbody> 


// TO DO Step 5: create a no-param function called renderStats()





// TO DO Step 6: add an event handler to the form
// 1. get form values
// 2. create a new dino with the following properties: id, name, species, birthYear, isMeatEater, and isPlantEater
// 3. add the new dino object to the array
// 4. call renderTable()
// 5. call renderStats()

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