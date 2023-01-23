class Programme {


    constructor(zoneDom) {

        this.zoneDom = zoneDom;
        this.balls = [];

        console.log(this.zoneDom);
    }

    add(ball) {
        this.balls.push(ball);
    }

    run() {
        this.balls.forEach((ball)=>{
            this.zoneDom.appendChild(ball.getDomObject());
        });

        //this.move();
    }

    move() {

        this.balls[0].move();

    }

}