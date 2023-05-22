import MovingObject from "./moving_object";
import * as Util from "./util.js";

class Asteroid extends MovingObject {

    static RADIUS = 25;
    static COLOR = "#E97451"

    constructor({ pos }) {
        this.pos = pos;
        this.color = COLOR;
        this.radius = RADIUS;
        this.vel = Util.randomVec();
    }
}

export default Asteroid;
