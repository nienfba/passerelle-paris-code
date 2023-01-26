import { GAME_KEY, GAME_SIZE } from "../params.js";

export class Apple {
    constructor() {
        this.domObject = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        this.color = 'green';
        this.init();
    }

    init() {
        this.x = this.getRandomInt(0, GAME_SIZE.boxSizeX - 1);
        this.y = this.getRandomInt(0, GAME_SIZE.boxSizeY - 1);
        this.initSvg();
    }

    initSvg() {
        this.domObject.setAttribute('x', this.x);
        this.domObject.setAttribute('y', this.y);
        this.domObject.setAttribute('width', 1);
        this.domObject.setAttribute('height', 1);
        this.domObject.setAttribute('fill', this.color);
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
    }

    getDomObject() {
        return this.domObject;
    }
}