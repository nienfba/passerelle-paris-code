
export class Snake {


    constructor() {
        /**
        * @var {Element} domObjet
        */
        this.domObject = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

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

    getSvg() {
        return this.domObject;
    }

    move() {
        this.x +=1;
        this.initSvg();
    }
}