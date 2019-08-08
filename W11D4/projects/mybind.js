class Lamp {
    constructor() {
        this.name = "a lamp";
    }
}

const turnOn = function () {
    console.log("Turning on " + this.name);
};

Function.prototype.myBind = function (_this, _args) {
    var that = this
    var args = Array.prototype.slice.call(arguments)
    return function () {
        var args1 = Array.prototype.slice.call(arguments)
        var args2 = args.slice(1, args.length).concat(args1)
        that.apply(_this, args2)
    }
}

const lamp = new Lamp();

// turnOn(); // should not work the way we want it to

const boundTurnOn = turnOn.bind(lamp);
const myBoundTurnOn = turnOn.myBind(lamp);

boundTurnOn(); // should say "Turning on a lamp"
myBoundTurnOn(); // should say "Turning on a lamp"