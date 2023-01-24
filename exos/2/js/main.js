'use strict';

const ball = new Ball(10,100,100);
const ball2 = new Ball(10, 20, 20, 'red');
const ball3 = new Ball(10, 30, 25, 'blue');
const ball4 = new Ball(10, 100, 100, 'green');

const zoneDom = document.querySelector('main');

const prog = new Programme(zoneDom);
prog.add(ball2).add(ball).add(ball3).add(ball4).run();


//document.body.append(ball.getDomObject(), ball2.getDomObject());