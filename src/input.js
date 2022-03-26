export default class InputHandler {
    constructor(paddle) {
        
        document.addEventListener('keydown', event => {
            // console.log(event)
            switch (event.key) {
                case 'ArrowLeft':
                    paddle.moveLeft();
                    break;
                case 'ArrowRight':
                    paddle.moveRight();
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