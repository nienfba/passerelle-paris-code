import { Snake } from "./Snake.js";

const GAME_SIZE = {
    x: 600,
    y: 600,
    boxSizeX: 30,
    boxSizeY: 30
};


export class SnakeGame {

    constructor(domZoneDisplay = null) {

        // Si on a une zone HTML qui est passée pour l'affichage.
        // Sinon directement dans le body
        this.domZoneDisplay = (domZoneDisplay == null) ? document.body : domZoneDisplay;

        /**
         * @var {Element} domObjet
         */
        this.domObject = document.createElementNS('http://www.w3.org/2000/svg', 'svg');


        this.snake = new Snake();

        // intialisaton du programme
        // on sépare l'initialisation du contructeur pour pouvoir initialiser le jeu après un GameOver
        this.init();


        document.addEventListener('keydown',this.keyEvent.bind(this));
       
    }

    init() {

        /**
         * @var {Number} score
         */
        this.score = 0;

        //On vide le SVG
        this.domObject.innerHTML = '';

        //Creation de l'objet du DOM (balise SVG)
        this.initSvg();
 
    }

    initSvg() {

        this.domObject.setAttribute('width', GAME_SIZE.x);
        this.domObject.setAttribute('height', GAME_SIZE.y);
        this.domObject.setAttribute('viewBox', `0 0 ${GAME_SIZE.boxSizeX} ${GAME_SIZE.boxSizeY}`);
        this.domObject.style.border = '1px solid blue';
        this.domObject.appendChild(this.snake.getSvg());
        // on devra ajouter un serpent et une pomme
    }

    start() {

        // on ajoute le svg à la page
        this.domZoneDisplay.appendChild(this.domObject);

        // on dit à setInterval de lier la fonction play avec le contexte défini par this. Ici this est bien l'instance de mon objet.
        // donc maintenant dans play, *this* sera toujours l'instance de l'objet !
        // COOL !
        this.intervalId = setInterval(this.play.bind(this), 500);
    }

    play() {
        // ça marche ici.. car *this* est bien l'instance de l'objet SnakeGame
        this.snake.move();
    }


    keyEvent(e) {
        console.log(e);
        console.log(e.keycode);
        if (e.keyCode == 32) 
            this.start();
    }
}