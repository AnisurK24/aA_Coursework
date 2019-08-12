const Asteroid = require("./asteroid.js")
const Util = require("./util.js")
const Ship = require("./ship");

function Game() {
    this.DIM_X = 800;
    this.DIM_Y = 600;
    this.NUM_ASTEROIDS = 10;
    this.asteroids = [];
    this.ships = [];
    this.addAsteroids();
}

Game.prototype.addAsteroids = function(){
    for (let i = 0; i < this.NUM_ASTEROIDS; i++) {
        // this.add(new Asteroid());
        this.asteroids.push(new Asteroid({game: this}));
    }
}

Game.prototype.addShip = function() {
    const ship = new Ship({
        pos: [this.DIM_X/2, this.DIM_Y/2],
        game: this
    });
    this.ships.push(ship);
    return ship;
}

Game.prototype.randomPosition = function() {
    return [this.DIM_X * Math.random(), this.DIM_Y * Math.random()];
}

Game.prototype.draw = function(ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
    this.asteroids.forEach(asteroid => asteroid.draw(ctx));
    this.ships.forEach(ship => ship.draw(ctx));
}

Game.prototype.moveObjects = function(delta) {
    this.asteroids.forEach(asteroid => asteroid.move(delta));
}

Game.prototype.isOutOfBounds = function(pos) {
  return pos[0] < 0 || pos[1] < 0 || pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y;
};

Game.prototype.wrap = function(pos) {
    return [
        Util.wrap(pos[0], this.DIM_X), Util.wrap(pos[1], this.DIM_Y)
    ];
};

Game.prototype.remove = function remove(object) {
    if (object instanceof Asteroid) {
        this.asteroids.splice(this.asteroids.indexOf(object), 1);
    } else {
        throw new Error("unknown type of object");
    }
};

Game.prototype.checkCollisions = function() {
    for (let i = 0; i < this.asteroids.length - 1; i++) {        
        for (let j = i + 1; j < this.asteroids.length; j++) {
            let obj1 = this.asteroids[i];
            let obj2 = this.asteroids[j];
            if (obj1.isCollidedWith(obj2)) {
                this.remove(obj2);
                this.remove(obj1);
            }
        }
    }
};

Game.prototype.step = function(delta) {
    this.moveObjects(delta);
    this.checkCollisions();
};

Game.prototype.remove = function(asteroid) {
    this.asteroids.splice(this.asteroids.indexOf(asteroid), 1);
}

module.exports = Game;
