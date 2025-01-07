import image from 'url:../../img/balloon.gif';

class Balloon {
    MAX_HEIGHT = 200;
    MAX_WIDTH = 600;

    constructor() {
        this.element = this.createBalloon();
        this.floatUp();
    }

    createBalloon() {
        const balloonImg = document.createElement('img');
        balloonImg.classList.add('single-balloon');
        balloonImg.src = image;
        // balloonImg.setAttribute('src', image);
        this.marginBottom = Math.floor( Math.random() * this.MAX_HEIGHT);
        this.marginLeft = Math.floor( Math.random() * this.MAX_WIDTH);
        this.setStyleAndPosition(balloonImg);
        return balloonImg;
    }

    setStyleAndPosition(element) {
        element.style = `
            max-height: 200px;
            max-width: 200px;
            position: absolute;
            bottom: ${this.marginBottom}px;
            left: ${this.marginLeft}px;
        `;
    }

    floatUp() {
        setInterval( () => {
            this.marginBottom += 0.2;
            this.setStyleAndPosition(this.element);
        }, 10 );
    }

}

export {Balloon}