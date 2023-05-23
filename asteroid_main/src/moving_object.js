class MovingObject {
    constructor({ pos, vel, radius, color }) {
        this.pos = pos;
        this.vel = vel;
        this.radius = radius;
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    // move()
}

export default MovingObject;
// MovingObject.prototype.draw = function(ctx) {
//     return new MovingObject(

//     )
// }





    // const mo = new MovingObject({
    //     pos: [30, 30],
    //     vel: [10,10],
    //     radius: 5,
    //     color: "#00FF00"
    // });
