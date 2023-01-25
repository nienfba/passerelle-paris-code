class Ball {

    /**
     * 
     * @param {Number} radius 
     * @param {Number} x 
     * @param {Number} y 
     * @param {String} color 
     */
    constructor(radius, x, y, color='black') {
        this.color = color;
        this.radius = radius;
        this.position = {x:x,y:y};
        this.direction = {x:1,y:1}

        this.domObject = document.createElement('div');

        this.setPositionDomObject();
    }

    /**
     * Défini les styles de l'objet DOM en fonction des propriétés !
     */
    setPositionDomObject(){
        this.domObject.style = `position:absolute;background-color:${this.color};border-radius:50%;width:${this.radius * 2}px;height:${this.radius * 2}px;top:${this.position.y}px;left:${this.position.x}px`;
    }

    /**
     * Retourne la collection de balles
     * @returns {Array}
     */
    getDomObject() {
        return this.domObject;
    }

    /**
     * Déplace la balle en fonction de la direction
     */
    move() {
        this.position.x += 2 * this.direction.x;
        this.position.y += 2 * this.direction.y;
        this.setPositionDomObject();
    }

}