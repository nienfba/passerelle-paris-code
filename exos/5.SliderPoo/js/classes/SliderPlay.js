/**
 * Exemple de classe enfant.
 * Elle "extends" la classe Slider pour y rajouter des fonctionnalités 
 * Avantage : pas de changement dans la classe mère... 
 */

class SliderPlay extends Slider {

    /**
     * Surcharge la méthode pour rajouter le play
     */
    createInterface() {

        // On appelle la méthode de l'objet parent
        super.createInterface();

        // On créé le bouton next
        this.btnPlay = document.createElement('button');
        this.btnPlay.innerHTML = '<i class="icon-play"></>';
        this.btnPlay.classList.add('play');
        this.btnPlay.addEventListener('click', this.play.bind(this));

        // On ajoute le bouton à l'interface mais en première position
        this.divSlider.prepend(this.btnPlay);

        /**
        * @var {Number} identifiant du timer play
        */
        this.playId = null;

    }

    /**
    * Action bouton play 
    */
    play(){
        if(this.playId == null) {
            this.btnPlay.innerHTML = '<i class="icon-pause"></>';
            this.playId = window.setInterval(this.next.bind(this),1000);
        }
        else {
            this.btnPlay.innerHTML = '<i class="icon-play"></>';
            window.clearInterval(this.playId);
            this.playId = null;
        }
    }
}