function GameView(game, ctx) {
    this.ctx = ctx;
    this.game = game;
    this.ship = this.game.addShip();
}

GameView.prototype.start = function() {
    this.setInterval(20);
}


GameView.prototype.setInterval = function(delta){
    setInterval(
        function(){ 
            this.game.draw(ctx);
            this.game.step(delta);
        }
    , delta);
}

module.exports = GameView;