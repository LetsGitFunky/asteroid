import MovingObject from "./moving_object";
import * as Util from "./util.js";

class Asteroid extends MovingObject {

    static RADIUS = 25;
    static COLOR = "#E97451"

    constructor({ pos }) {
        super({
            pos: pos,
            vel: Util.randomVec(length),
            color: Asteroid.COLOR,
            radius: Asteroid.RADIUS
        })
    }
}

export default Asteroid;
