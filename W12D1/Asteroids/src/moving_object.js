const Util = require("./util");

function MovingObject(obj){
    this.pos = obj.pos;
    this.vel = obj.vel;
    this.radius = obj.radius;
    this.color = obj.color;
    this.game = obj.game;
};

// var mo = new MovingObject(
//     { pos: [30, 30], vel: [10, 10], radius: 5, color: "#00FF00" }
// );


MovingObject.prototype.draw = function draw(ctx){
    // console.log(`calling draw on ${this}`);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(
        this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true
    );
    ctx.fill();
};

MovingObject.prototype.move = function move(delta) {
    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];

    if (this.game.isOutOfBounds(this.pos)) {
        this.pos = this.game.wrap(this.pos);
    }
};

MovingObject.prototype.remove = function remove() {
    this.game.remove(this);
};

MovingObject.prototype.isCollidedWith = function(otherObject) {
    let distance = Util.distance(this.pos, otherObject.pos);
    return distance < (this.radius + otherObject.radius);
};

// MovingObject.prototype.collideWith = function(otherObject) {
    
// }

module.exports = MovingObject;