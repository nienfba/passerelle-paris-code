import { Snake } from "./Snake.js";
import { Apple } from "./Apple.js";
import { TailPart } from "./TailPart.js";
import {GAME_KEY, GAME_SIZE} from "../params.js";

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
         * @var {Apple} snake : le serpent
         */
        this.apple = new Apple();

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

    /**
     * Initialise le jeu
     * @param {void}
     * @return {void}
     */
    init() {

        /**
         * @var {Number} score
         */
        this.score = 0;

        /**
         * @var {Number} score lecture du score précédent
         */
        this.previousScore = window.localStorage.getItem('snake.score') ?? 0;

        /**
         * @var {Number} score lecture du score précédent
         */
        this.highScore = window.localStorage.getItem('snake.highScore') ?? 0;

        /**
         * @var {Number} speed
         */
        this.speed = 10;

        /**
         * @var {Number} frameRate taux de rafraichisement par seconde
         */
        this.frameRate = 60;


        /**
         * @var {Number} currentFrame la frame courante pour gérer la vitesse
         */
        this.currentFrame = 1;

        /**
         * @var {Bool} pause du jeu
         */
        this.break = false;

        /**
         * @var {Number|null} Direction courante du snake
         */
        this.direction = null

        /**
         * @var {Number} Nombre de pomme mangé
         */
        this.appleEat = 0;

        //On vide le SVG
        this.domObject.innerHTML = '';


        // on initialise le snake
        this.snake.init();

        //on initialise la position de la première pomme
        this.apple.init();

        //Creation de l'objet du DOM (balise SVG)
        this.initSvg();


        this.updateDisplay();

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

    updateDisplay() {
        console.log(this.previousScore, document.querySelector('#start p span.score'));
        //score précédent
        document.querySelector('#start p span.previous-score').textContent = this.previousScore;
        document.querySelector('#start p span.high-score').textContent = this.highScore;
        document.querySelector('#start p span.score').textContent = this.score;
    }


    start() {

        // Ajout du serpent 
        this.domObject.appendChild(this.snake.getDomObject());

        // Ajout de la pomme
        this.domObject.appendChild(this.apple.getDomObject());

        // on ajoute le svg à la zone dans la page
        this.domZoneDisplay.appendChild(this.domObject);


        this.startMove();
        
    }

    startMove() {
        // on dit à setInterval de lier la fonction play avec le contexte défini par this. Ici this est bien l'instance de mon objet.
        // donc maintenant dans play, *this* sera toujours l'instance de l'objet !
        // COOL !
        this.intervalId = setInterval(this.play.bind(this), 1000/this.frameRate);
    }

    stopMove() {
        clearInterval(this.intervalId);
        this.intervalId = null;
    }

    play() {
        if (this.currentFrame == this.speed) {

            // ça marche ici.. car *this* est bien l'instance de l'objet SnakeGame
            let movePossible = this.snake.move(this.direction);

            this.collision(movePossible);

            this.currentFrame = 1;
        }
        else {
            this.currentFrame++;
        }
 
    }

    /**
     * Détecte une collision avec les bords !
     */
    collision(movePossible) {
        console.log(movePossible, this.snake.x)
        if (movePossible == false || this.snake.x < 0 || this.snake.y < 0 || this.snake.x == GAME_SIZE.boxSizeX || this.snake.y == GAME_SIZE.boxSizeY) {
            this.gameOver();
        }
        this.collisionApple();
    }


    collisionApple(){
       
        if (this.snake.x == this.apple.x && this.snake.y == this.apple.y) {
            this.appleEat+=1;
            this.score+=10;

            // Ajouter un élement à la queue du serpent à la même position que la pomme pour le moment !
            let tailPart = new TailPart(this.apple.x, this.apple.y)
            this.snake.tail.add(tailPart);

            // On ajoute le tailPart au SVG
            this.domObject.appendChild(tailPart.getDomObject());

            // on change la pomme de position
            this.apple.init();

            // on met à jour l'affichage du jeu
            this.updateDisplay();

            //on accelere
            if (this.appleEat % 2 == 0 && this.speed > 1)
                this.speed-=1;

        }

    }

    gameOver() {
        this.stopMove();
        this.saveScore();
        window.alert('Game over');
        this.init();
        this.start();
    }

    saveScore() {
        if (this.score > this.highScore)
            window.localStorage.setItem('snake.highScore', this.score);

        window.localStorage.setItem('snake.score', this.score);


        window.localStorage.setItem('snake.state',JSON.stringify(this));
    }

    keyEvent(e) {
        // si on a pas démarré le timer on lance le jeu
        if (this.intervalId == null && this.break != true) {
            this.start();
            return;
        }

        if (e.keyCode == GAME_KEY.pause)
            this.setBreak();

        if (e.keyCode == GAME_KEY.right || e.keyCode == GAME_KEY.left || e.keyCode == GAME_KEY.up || e.keyCode == GAME_KEY.down)
            this.direction = e.keyCode;
    }

    setBreak() {
        if (this.break == true) {
            this.break = false;
            this.startMove();
        }
        else {
            this.break = true;
            this.stopMove();
            console.log(this.snake.tail);
        }
    }
}