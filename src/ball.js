export default class Ball {
    constructor() {
        this.image =  document.getElementById('img_ball');
    }

    draw(ctx) {
        ctx.drawImage(this.image, 100, 100, 50, 50);
    }
}