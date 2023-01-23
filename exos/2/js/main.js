'use strict';

const ball = new Ball(50,100,100);
const ball2 = new Ball(80, 200, 250, 'red');
const ball3 = new Ball(150, 300, 250, 'blue');

const zoneDom = document.querySelector('main');

const prog = new Programme(zoneDom);
prog.add(ball);
prog.add(ball2);
prog.add(ball3);
prog.run();


//document.body.append(ball.getDomObject(), ball2.getDomObject());