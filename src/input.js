import { GAME_STATE } from './game.js';

export default class InputHandler {
    constructor(paddle, game) {
        
        document.addEventListener('keydown', event => {
            switch (event.key) {
                case 'ArrowLeft':
                    paddle.moveLeft();
                    break;
                case 'ArrowRight':
                    paddle.moveRight();
                    break;
                case 'Escape':
                    game.togglePause()
                    break;
                case ' ':
                    if(game.gameState === GAME_STATE.MENU) {
                        game.start();
                    }
                    break;
                
            }
        });

        document.addEventListener('keyup', event => {
            switch (event.key) {
                case 'ArrowLeft':
                case 'ArrowRight':
                    paddle.stop();
                    break;
            }
        });
    }
}