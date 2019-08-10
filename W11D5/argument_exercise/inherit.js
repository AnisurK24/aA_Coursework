

Function.prototype.inherit = function(BaseClass) {
  
  const Surrogate = function () {};
  Surrogate.prototype = BaseClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}

// Function.prototype.inherits2 = function() {
//   this.prototype = Object.create(Subclass.prototype)
//   // this.prototype = Object.create.prototype
// }

function MovingObject() {
  this.name = "motherShip";
  this.size = 100;
}

function Ship() {
  this.name = "theShip";
  // this.size = 20
}
Ship.inherit(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);
