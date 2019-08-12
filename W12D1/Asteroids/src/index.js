const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js")

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;

document.addEventListener("DOMContentLoaded", function () {
    const canvasEl = document.getElementsByTagName("canvas")[0];
    const game = new Game();
    canvasEl.width = game.DIM_X;
    canvasEl.height = game.DIM_Y;
    const ctx = canvasEl.getContext("2d");
    window.ctx = ctx;
    window.game = game;
    const gv = new GameView(game, ctx);
    gv.start();
});
