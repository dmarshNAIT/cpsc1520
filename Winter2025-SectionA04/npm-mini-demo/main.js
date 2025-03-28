console.log('badger badger badger');

// every 2 seconds, log "mushroom mushroom" to the console
let infiniteMushroom = setInterval( ()=> {
    console.log("mushroom mushroom");
}, 2 * 1000);

// cancel the infinite mushroom timer after 10 seconds
setTimeout( () => {
    clearInterval(infiniteMushroom);
}, 10 * 1000)
