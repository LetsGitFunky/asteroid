// console.log("hello")

import MovingObject from "./moving_object";

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


})
