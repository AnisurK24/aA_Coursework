const Util = require("./util.js");
const MovingObject = require("./moving_object.js")

const DEFAULTS = {
    COLOR: "#333333",
    RADIUS: 10,
    SPEED: 4,   
};

function Asteroid(options) {
    options = options || {};
    options.color = DEFAULTS.COLOR;
    options.pos = options.pos || options.game.randomPosition();
    options.radius = DEFAULTS.RADIUS;
    options.vel = options.vel || Util.randomVec(DEFAULTS.SPEED);

    MovingObject.call(this, options)
};


Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
