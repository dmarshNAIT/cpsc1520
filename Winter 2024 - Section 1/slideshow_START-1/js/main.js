// your js here...
let images = ["mountain1.jpg", "mountain2.jpg", "mountain3.jpg"];
let currentImg = 0;
let idx;
let imageTrackerElement = document.querySelector(".image-tracker");

// display the current image
document.querySelector(".carousel>img").src = "images/" + images[0];

// add the appropriate number of selector bullets
// for every element in the array (images.length)
for (let count = 0; count < images.length; count++) {
  // add the following HTML to our image-tracker
  //  <span class="control" data-idx="1">&bull;</span>
  imageTrackerElement.innerHTML += `<span class="control" data-idx="${count}">&bull;</span>`;
}

// highlight the first bullet as 'active'
// v1:
// let activeBullet = document.querySelector('.image-tracker span');
// v2:
let activeBullet = imageTrackerElement.querySelector("span");
activeBullet.classList.add("active");

// add event listener for carousel controls
document.querySelector(".carousel").addEventListener("click", function (evt) {
  let target = evt.target;
  if (target.classList.contains("control")) {
    if (target.classList.contains("next")) {
      // move to the next index in the array
      currentImg += 1;
      // if index is >= array length, set currentImg = 0
      if (currentImg >= images.length) {
        currentImg = 0;
      }
    } else if (target.classList.contains("prev")) {
      // move to the previous index in the array
      currentImg -= 1;
      // if index is < 0, set currentImg to length - 1
      if (currentImg < 0) {
        currentImg = images.length - 1;
      }
    } else {
      // selector bullet clicked
      currentImg = target.dataset.idx; // this gets the data-idx HTML attribute value
    }

    // display the new current image
    document.querySelector(".carousel>img").src =
      "images/" + images[currentImg];

    // update the active selector bullet
    // remove the active class from the currently active span
    imageTrackerElement.querySelector("span.active").classList.remove("active");
    // add the active class to the recently selected span
    let spanList = imageTrackerElement.querySelectorAll("span");
    spanList[currentImg].classList.add("active");
  }
});

// bonus challenge:
// add another event listener to the entire document
// listening for a 'keydown' event
document.addEventListener("keydown", (event) => {
  //console.log("the event key: " + event.key);
  //console.log("the event code: " + event.code);

  switch (event.key) {
    case "ArrowLeft":
      click = new MouseEvent("click", { bubbles: true });
      document.querySelector(".prev").dispatchEvent(click);
      break;
    case "ArrowRight":
      click = new MouseEvent("click", { bubbles: true });
      document.querySelector(".next").dispatchEvent(click);
      break;
    default:
      break;
  }
});
