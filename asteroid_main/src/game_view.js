import Game from "./game";

class GameView {
    constructor(game, ctx) {
        this.game = game;
        this.ctx = ctx;
    }

    start() {
        // Call this.game.moveObjects and this.game.draw every 20 ms
        setInterval(() => {
            this.game.moveObjects();
            this.game.draw(this.ctx);
        }, 20);
    }
}

export default GameView;
