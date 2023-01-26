import { SnakeGame } from "./classes/SnakeGame.js";

const game = new SnakeGame();

const test = window.localStorage.getItem('snake.state');
console.log(JSON.parse(test));