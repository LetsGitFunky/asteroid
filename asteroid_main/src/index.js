// console.log("hello")

import MovingObject from "./moving_object";
import Asteroid from "./asteroid";
import Game from "./game";
import GameView from './game_view';

window.MovingObject = MovingObject;

document.addEventListener("DOMContentLoaded", () => {
    const canvasEl = document.getElementById("game-canvas")
    canvasEl.width = 500;
    canvasEl.height = 700;
    const ctx = canvasEl.getContext("2d")
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, 500, 700);

    ctx.fillStyle = "pink"
    ctx.fillRect(50, 50, 80, 80)

    const mo = new MovingObject({
        pos: [200, 200],
        vel: [10, 10],
        radius: 50,
        color: "#00FF00"
    });

    // Draw the MovingObject
    mo.draw(ctx);

    const ast = new Asteroid( {
        pos: [30, 30]
    })

    ast.draw(ctx);

    // const gogo = new Game();

    // gogo.draw(ctx)

    const game = new Game();
    const gameView = new GameView(game, ctx);
    gameView.start();
})
