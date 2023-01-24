/**
 * Programme : gestion du déplacement des ojets
 */

class Programme {

    constructor(zoneDom) {

        this.zoneDom = zoneDom;
        this.balls = [];

        console.log(this.zoneDom);
    }

    add(ball) {
        this.balls.push(ball);
        this.zoneDom.appendChild(ball.getDomObject());
        return this;
    }

    run() {
        this.intervalId = window.setInterval(this.move.bind(this),1000/120);
    }

    move() {
        let previousHitbox = null;
        this.balls.forEach((ball) => {
            previousHitbox = this.collision(ball, previousHitbox);
            ball.move();
        });

        //clearInterval(this.intervalId);
    }

    collision(ball, previousHitbox) {
      
        let hitBox = {x:ball.position.x, y:ball.position.y, width:ball.radius * 2, height: ball.radius * 2};
        
        console.log(hitBox);

        if(hitBox.x + hitBox.width >= this.zoneDom.clientWidth || hitBox.x <= 0 )
            ball.direction.x *=-1;

        if (hitBox.y + hitBox.height >= this.zoneDom.clientHeight || hitBox.y <= 0)
            ball.direction.y *= -1;

        if (previousHitbox != null) {
            // si les deux balles
        }
        
        return hitBox;
    }

}