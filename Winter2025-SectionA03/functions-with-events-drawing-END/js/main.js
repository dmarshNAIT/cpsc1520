(function () {
    let body = document.querySelector('body');
    let main = document.querySelector('main');
    let marker = document.querySelector('.green-box');

    // show the user a "drawing marker"
    body.addEventListener('mousemove', (evt) => {
        marker.style.top = `${evt.y}px`;
        marker.style.left = `${evt.x}px`;
    });

    body.addEventListener('mousedown', () => {
         main.addEventListener('mousemove', draw);
    });

    body.addEventListener('mouseup', () => {
        main.removeEventListener('mousemove', draw);
        // have to re-query to get the "new" drawn green box
        marker = document.querySelector('.green-box');
   });

    function draw(coords) {
        let newMarker = `<div
                            class="blue-box"
                            style="top: ${coords.y}px;
                                   left: ${coords.x}px">
                         </div>`;
        main.innerHTML += newMarker;
    }

})();