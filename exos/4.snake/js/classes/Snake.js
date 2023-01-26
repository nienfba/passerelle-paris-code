import { GAME_KEY, GAME_SIZE } from "../params.js";
import { Tail } from "./Tail.js";

export class Snake {

    constructor() {
        /**
        * @var {Element} domObjet
        */
        this.domObject = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

        

        this.init();
        
       
    }

    init() {
        this.tail = new Tail();
        this.x = 10;
        this.y = 10;
        this.initSvg();
    }

    initSvg() {
        this.domObject.setAttribute('width', 1);
        this.domObject.setAttribute('height', 1);
        this.domObject.setAttribute('x', this.x);
        this.domObject.setAttribute('y', this.y);
    }
    
    getDomObject() {
        return this.domObject;
    }
    
    move(direction) {

        let oldX = this.x;
        let oldY = this.y;
        
        switch (direction) {
            case GAME_KEY.right:
                this.x += 1;
                break;
            case GAME_KEY.left:
                this.x -= 1;
                break;
            case GAME_KEY.up:
                this.y -=1;
                break;
            case GAME_KEY.down:
                this.y += 1;
                break;
        }

        this.initSvg();

        // On bouge la queue : première partie à la position de la tête!
        return this.tail.move(oldX, oldY, this.x, this.y);

        
    }
}