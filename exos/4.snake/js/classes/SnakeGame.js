import { Snake } from "./Snake.js";

const GAME_SIZE = {
    x: 600,
    y: 600,
    boxSizeX: 30,
    boxSizeY: 30
};

const GAME_KEY = {
    right: 39,
    left: 37,
    up: 38,
    down: 40,
    pause: 32,
};


export class SnakeGame {

    constructor(domZoneDisplay = null) {

        /**
         * @var {Element} domZoneDisplay Si on a une zone HTML qui est passée pour l'affichage. Sinon directement dans le body
         */
        this.domZoneDisplay = (domZoneDisplay == null) ? document.body : domZoneDisplay;

        /**
         * @var {Element} domObjet
         */
        this.domObject = document.createElementNS('http://www.w3.org/2000/svg', 'svg');

        /**
         * @var {Snake} snake : le serpent
         */
        this.snake = new Snake();

        /**
         * @var {Number} identifiant du timer du jeu
         */
        this.intervalId = null;

        // Ajout du gestionnaire d'event Clavier
        document.addEventListener('keydown', this.keyEvent.bind(this)); 

        // intialisaton du programme
        // on sépare l'initialisation du contructeur pour pouvoir initialiser le jeu après un GameOver
        this.init();


       
       
    }

    init() {

        /**
         * @var {Number} score
         */
        this.score = 0;

        /**
         * @var {Number|null} Direction courante du snake
         */
        this.direction = null

        //On vide le SVG
        this.domObject.innerHTML = '';

        //initialisation position snake
        this.snake.init();

        //Creation de l'objet du DOM (balise SVG)
        this.initSvg();

        
 
    }

    /**
     * Initialise / Modifie le SVG 
     */
    initSvg() {
        this.domObject.setAttribute('width', GAME_SIZE.x);
        this.domObject.setAttribute('height', GAME_SIZE.y);
        this.domObject.setAttribute('viewBox', `0 0 ${GAME_SIZE.boxSizeX} ${GAME_SIZE.boxSizeY}`);
        this.domObject.style.border = '1px solid blue';
    }

    start() {

        // Ajout du serpent 
        this.domObject.appendChild(this.snake.getSvg());

        // Ajout de la pomme

        // on ajoute le svg à la zone dans la page
        this.domZoneDisplay.appendChild(this.domObject);

        // on dit à setInterval de lier la fonction play avec le contexte défini par this. Ici this est bien l'instance de mon objet.
        // donc maintenant dans play, *this* sera toujours l'instance de l'objet !
        // COOL !
        this.intervalId = setInterval(this.play.bind(this), 200);
    }

    play() {
        // ça marche ici.. car *this* est bien l'instance de l'objet SnakeGame
        this.snake.move(this.direction);

        this.collisionOut();
        //this.collisionApple();
    }

    collisionOut() {
        if (this.snake.x < 0 || this.snake.y < 0 || this.snake.x == GAME_SIZE.boxSizeX || this.snake.y == GAME_SIZE.boxSizeY) {
            clearInterval(this.intervalId);
            this.intervalId = null;
            window.alert('Game over');
            this.init();
        }
    }


    keyEvent(e) {
        // si on a pas démarré le timer on lance le jeu
        if (this.intervalId == null) {
            this.start();
            return;
        }

        if (e.keyCode == GAME_KEY.right || e.keyCode == GAME_KEY.left || e.keyCode == GAME_KEY.up || e.keyCode == GAME_KEY.down)
            this.direction = e.keyCode;
    }
}