export default class Paddle{
    constructor(game){
        this.width = 150;
        this.height = 30;
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;

        this.maxSpeed = 10;
        this.speed = 0;
        
        this.position = {
            x: game.gameWidth / 2 - this.width / 2,
            y: game.gameHeight - this.height - 10
        }
    }

    draw(ctx){
        ctx.fillStyle = '#00f';
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height); 
    }

    update(deltaTime){
        if(!deltaTime) return;
        
        this.position.x += this.speed;

        if(this.position.x < 0){
            this.position.x = 0;
        } else if(this.position.x > this.gameWidth - this.width){
            this.position.x = this.gameWidth - this.width;
        }
    }

    moveLeft(){
        this.speed = -this.maxSpeed;
    }

    moveRight(){
        this.speed = this.maxSpeed;
    }

    stop() {
        this.speed = 0;
    }
    
}