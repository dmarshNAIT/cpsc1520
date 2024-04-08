/*
Read it, a simple reddit clone.

1. Setup npm, parcel and packages
    - install bootstrap
    - install parcel and set up
    - change the index.html file to point to an index.js file where we
        - import bootstrap
        - import main.js
2. Run the base server (in a separate folder) and ensure you understand how to interact with the api.
    NOTE: look at backend-json-server with the readit-db.json
3. Create api.js file to interact with our server.
    - talk about how to use promises when returning a promise.
    - create the different promises for
        - post
        - patch
    - talk about headers and how we need to specify "application/json" for
      the content type to make a header.
4. Use the api.js functions in the main.js 
    - in the create add a post with the api.
    - update the score in the "changescore" function
    - at the bottom of the file fetch all the posts

Note: talk about REST Clients
- Boomerang (https://boomerangapi.com/)
- Postman (https://www.postman.com/)

*/

// import getAllPosts
import { getAllPosts } from "./api.js";

let allItems = document.querySelector(".readit-items")

let readitForm = document.querySelector("#add-readit-item")

// adding piece
readitForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    let form = event.target
    let title = form.elements["title"]
    let url = form.elements["item-url"]
    console.log(title.value)
    console.log(url.value)
    addReaditItem(title.value, url.value)
    // reset elements
    title.value = ""
    url.value = ""
})

/**
 * Adds a post to the page.
 * @param {String} title   The title of the post
 * @param {String} url     The URL of the post
 */
// TO DO: add score as a param
const addReaditItem = (title, url)=> {
    // create the card
    let card = document.createElement("div")
    card.classList.add("card", "mt-2") // adds both classes
    //create card body
    let cardBody = document.createElement("div")
    cardBody.classList.add("card-body", "d-flex", "flex-row")
    // create up button
    let upButton = document.createElement("button")
    upButton.classList.add("btn", "vote-up", "m-1", "btn-secondary")
    upButton.textContent = "up"
    // create score
    let score = document.createElement("p")
    score.classList.add("score", "h4", "m-2")
    score.textContent = '0'
    // create down button
    let downButton = document.createElement("button")
    downButton.classList.add("btn", "vote-down", "m-1", "btn-secondary")
    downButton.textContent = "down"
    // create link
    let newLink = document.createElement("a")
    newLink.classList.add("h4", "m-2")
    newLink.setAttribute("href", url)
    newLink.textContent = title
    console.log(newLink)
   
    // patch altogether
    card.appendChild(cardBody)
    cardBody.appendChild(upButton)
    cardBody.appendChild(score)
    cardBody.appendChild(downButton)
    cardBody.appendChild(newLink)

    // append to list
    allItems.appendChild(card)
}

// Ranking Piece
allItems.addEventListener("click", (event)=> {
    let element = event.target
    
    if (element.classList.contains("vote-up")) {
        voteUp(element)
    } else if (element.classList.contains("vote-down")) {
        voteDown(element)
    }
})

const voteUp = (buttonElement) => {
    // gets the parent which is the element with the class "card-body"
    let cardBodyElement = buttonElement.parentNode
    let scoreElement = cardBodyElement.children[1] // the second element
    changeScore(scoreElement, 1)
    changeItemOrder(cardBodyElement)
}

const voteDown = (buttonElement)=> {
    let cardBodyElement = buttonElement.parentNode
    let scoreElement = cardBodyElement.children[1] // the second element
    changeScore(scoreElement, -1)
    changeItemOrder(cardBodyElement)
}

const changeScore = (scoreElement, value) => {
    let currentScore = parseInt(scoreElement.textContent)
    scoreElement.textContent = currentScore + value
}

const changeItemOrder = (cardBodyElement) => {
    // below gets the parent of element with "card-body"
    // which is the element with the class "card"
    let cardElement = cardBodyElement.parentNode
    // gets the element above in the list of elements
    let upperCardElement = cardElement.previousElementSibling
    let lowerCardElement = cardElement.nextElementSibling

    // they might be null so we have to check.
    if (upperCardElement) {
        swapItemsIfNecessary(upperCardElement, cardElement)
    }
    
    if (lowerCardElement) {
        swapItemsIfNecessary(cardElement, lowerCardElement)
    }
}

const swapItemsIfNecessary = (topCardElement, bottomCardElement) => {
    // traverse the tree down.
    let upperScoreElement = topCardElement.children[0].children[1]
    let lowerScoreElement = bottomCardElement.children[0].children[1]

    if (parseInt(lowerScoreElement.innerText) > parseInt(upperScoreElement.innerText)) {
        let cardListElement = topCardElement.parentNode
        console.log(cardListElement)
        cardListElement.insertBefore(bottomCardElement, topCardElement)
        
        upAnimation(bottomCardElement)
        downAnimation(topCardElement)
    }
}

// this css is given to us to add this 
const ANIMATION_LENGTH = 1000

const upAnimation = (element) => {
    element.classList.add("up-fade")
    setTimeout(()=> {
        element.classList.remove("up-fade")
    }, ANIMATION_LENGTH)
}

const downAnimation = (element) => {
    element.classList.add("down-fade")
    setTimeout(()=> {
        element.classList.remove("down-fade")
    }, ANIMATION_LENGTH)
}



// call getAllPosts, and THEN call addReaditItem() for each post
console.log('calling get all posts...');
getAllPosts()
    .then((posts) => {
        
        // for each post: call addReadItItem()
        posts.forEach( (post) => {
            console.log(post)
            addReaditItem(post.title, post.url);
        });


    });

// 