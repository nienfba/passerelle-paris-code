class Ball {

    constructor(radius, x, y, color='black') {
        this.color = color;
        this.x = x;
        this.y = y;
        this.radius = radius;

        this.domObject = null;

        this.setDomObject();
    }

    setDomObject(){
        this.domObject = document.createElement('div');
        this.domObject.style =`position:relative;background-color:${this.color};border-radius:50%;width:${this.radius * 2}px;height:${this.radius * 2}px;top:${this.y}px;left:${this.x}px`;
    }

    getDomObject() {
        return this.domObject;
    }

}