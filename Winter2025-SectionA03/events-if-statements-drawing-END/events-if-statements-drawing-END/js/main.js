
console.log('drawing js linked')

let body = document.querySelector("body")
let main = document.querySelector("main")

let isMouseDown = false

body.addEventListener("mousemove", (event)=> {
  let box = document.querySelector(".green-box")
  console.log(event)
  box.style.top = `${event.y}px`
  box.style.left = `${event.x}px`
  // if mouse is down then we can
  // see that it's drawing.
  if (isMouseDown) {
    drawBox(event.x, event.y)
  }
})

// on mousedown update the isMousedown to true
body.addEventListener("mousedown", (event)=> {
  console.log('mousedown!')
  isMouseDown = true;
})

// on mouseup we change the isMouseDown to false
body.addEventListener("mouseup", (event)=> {
  console.log('mouseup!')
  isMouseDown = false;
})

// draw box function.
const drawBox = (x, y) => {
  let newBox = `<div class="blue-box"
    style="top: ${y}px; left: ${x}px;"
  ></div>`

  main.innerHTML +=  newBox
}