import image from 'url:../../img/balloon.gif';

class Balloon {
    MAX_HEIGHT = 200;
    MAX_WIDTH = 200;

    constructor() {
        this.element = this.createBalloon();
        this.floatUp();
    }

    createBalloon () {
        // create an img with the src = image & class of single-balloon
        const img = document.createElement('img');
        img.setAttribute('src', image);
        img.classList.add('single-balloon');

        // pick a random spot on the page
        // kevin is our left margin
        this.kevin = Math.floor(Math.random() * this.MAX_WIDTH); 
        // steve is our bottom margin
        this.steve = Math.floor(Math.random() * this.MAX_HEIGHT);
        
        // call setStyleAndPosition
        this.setStyleAndPosition(img);

        // return balloon element
        return img;
    }

    setStyleAndPosition(element) {
        element.style = `
            max-height: 200px;
            max-width: 200px;
            position: absolute;
            left: ${this.kevin}px;
            bottom: ${this.steve}px;
        `;
    }

    floatUp() {
        setInterval(()=>{
            this.steve += 0.2;
            this.setStyleAndPosition(this.element);
        }, 10)
    }

}

export {Balloon}