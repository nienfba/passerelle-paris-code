'use strict';

const ball = new Ball(50,100,100);

const ball2 = new Ball(80, 200, 250, 'red');

document.body.append(ball.getDomObject(), ball2.getDomObject());