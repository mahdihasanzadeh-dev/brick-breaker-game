export default class InputHandler {
    constructor(paddle, game) {
        
        document.addEventListener('keydown', event => {
            console.log(event)
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