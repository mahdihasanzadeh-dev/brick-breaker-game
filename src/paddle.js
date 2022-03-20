export default class Paddle{
    constructor(gameWidth, gameHeight){
        this.width = 150;
        this.height = 30;
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;

        this.maxSpeed = 10;
        this.speed = 0;
        
        this.posotion = {
            x: gameWidth / 2 - this.width / 2,
            y: gameHeight - this.height - 10
        }
    }

    draw(ctx){
        ctx.fillStyle = '#00f';
        ctx.fillRect(this.posotion.x, this.posotion.y, this.width, this.height); 
    }

    update(deltaTime){
        if(!deltaTime) return;
        
        this.posotion.x += this.speed;

        if(this.posotion.x < 0){
            this.posotion.x = 0;
        } else if(this.posotion.x > this.gameWidth - this.width){
            this.posotion.x = this.gameWidth - this.width;
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