// create a balloon class that
// will create a balloon that is going to float up.

import image from '../../img/balloon.gif'

class Balloon {
     MAX_HEIGHT = 200;
     MAX_WIDTH = 400;

     constructor(){
        this.element = this.createBalloon();
        this.floatUp();
     }

      createBalloon(){
        let balloonGif = document.createElement('img');
        balloonGif.classList.add('single-balloon')
        balloonGif.setAttribute('src', image)
        this.leftMargin = Math.random() * this.MAX_WIDTH
        this.topMargin = Math.random() * this.MAX_HEIGHT
        this.setStyleAndPosition(balloonGif)
        return balloonGif
      }

      setStyleAndPosition(element){
        element.style = `
            max-height: 200px;
            max-width: 200px;
            position: absolute;
            bottom: ${this.topMargin}px;
            left: ${this.leftMargin}px;
        `
      }

      addToElement(containerElement){
        containerElement.append(this.element);
      }

      floatUp(){
        setInterval( () => {
            this.topMargin += 0.2
            this.setStyleAndPosition(this.element)
        }, 10)

      }

}

export { Balloon}