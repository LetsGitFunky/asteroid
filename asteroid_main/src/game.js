import Asteroid from "./asteroid";

class Game {
    static DIM_X = 50;
    static DIM_Y = 50;
    static NUM_ASTEROIDS = 10;

    constructor() {
        this.dim_x = Game.DIM_X;
        this.dim_y = Game.DIM_Y;
        this.num_asteroids = Game.NUM_ASTEROIDS;
        this.asteroids = [];

        this.addAsteroids();
    }

    randomPosition() {
        return [
            Math.floor(Math.random() * this.dim_x),
            Math.floor(Math.random() * this.dim_y)
        ];
    }

    addAsteroids() {
        for (let i = 0; i < this.num_asteroids; i++) {
            this.asteroids.push(
                new Asteroid({pos: this.randomPosition() })
            )
        }
    }

    draw(ctx) {
        ctx.clearRect(0, 0, this.dim_x, this.dim_y)
        this.asteroids.forEach(asteroid => {
            asteroid.draw(ctx);
        })
    }

    // moveObjects() {
    //     this.asteroids.forEach(asteroid => {

    //     }

    //     )
    // }

}

export default Game;
