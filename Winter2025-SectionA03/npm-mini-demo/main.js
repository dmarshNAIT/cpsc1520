console.log('Hello, World!');

// repeat a message every 2 seconds
let annoyingMessage = setInterval( () => {
    console.log('hellooooooooooo');
}, 2 * 1000)

// stop repeating it after 10 seconds
setTimeout( ()=> {
    clearInterval(annoyingMessage);
}, 10 * 1000);