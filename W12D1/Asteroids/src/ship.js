const MovingObject = require("./moving_object");
const Util = require("./util");

const DEFAULTS = {
    COLOR: "#0015FF",
    RADIUS: 10,
};

function Ship(options) {
    options.radius = options.radius || DEFAULTS.RADIUS;
    options.color = options.color || DEFAULTS.COLOR;
    options.vel = options.vel || [0, 0];

    MovingObject.call(this, options);
};

Util.inherits(Ship, MovingObject);

module.exports = Ship;