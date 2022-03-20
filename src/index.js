import Paddle from './paddle.js';
import InputHandler from './input.js';
import Ball from './ball.js';

let canvans = document.getElementById('gameScreen');
let ctx = canvans.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
new InputHandler(paddle)
let ball = new Ball();

paddle.draw(ctx);

let lastTime = 0;




function gameLoop(timeStamp){
    let deltaTime = timeStamp - lastTime;
    lastTime = timeStamp;

    ctx.clearRect(0, 0, canvans.width, canvans.height);
    paddle.update(deltaTime);
    paddle.draw(ctx);
    ball.draw(ctx);

    requestAnimationFrame(gameLoop);
}

gameLoop(lastTime)
