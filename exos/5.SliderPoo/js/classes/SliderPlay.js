
class SliderPlay extends Slider {


    createInterface() {

        super.createInterface();

        // On créé le bouton next
        this.btnPlay = document.createElement('button');
        this.btnPlay.textContent = 'Play';
        this.btnPlay.addEventListener('click', this.play.bind(this));

        this.divSlider.appendChild(this.btnPlay);

        /**
        * @var {Number} identifiant du timer play
        */
        this.playId = null;

    }

    play(){
        if(this.playId == null) {
            this.btnPlay.textContent = 'Pause';
            this.playId = window.setInterval(this.next.bind(this),1000);
        }
        else {
            this.btnPlay.textContent = 'Play';
            window.clearInterval(this.playId);
            this.playId = null;
        }
    }
}