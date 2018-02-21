/*
  Tre olika typer av objekt i javascript

  Host objects: (Enviroment objects, ex. webbläsarens objekt)
    - document
    - window
    - console
    - node

  Core objects: (Inbyggda objekt i javascript)
    - String, Object, Math, Boolean osv.

  Author objects:
    - Objekt som vi skapar själva
    - Objekt som ges av externa bibliotek
*/

/*
var person = new Object();
person.name = new Object();
person.name.first = 'Jakob';
person.name.last = 'Rolandsson';

console.log(person.name);


//Object literal
var person = {
  name: {
    first: 'Jakob',
    last: 'Rolandsson'
  },
  preferences: {
    color: 'blue',
    sport: 'golf'
  },
  roar: function() {
    return 'Roooooar';
  },
  say: function(speech) {
    return this.name.first + " says: " + speech;
  }
}
//console.log(person.roar());
console.log(person.say("hello world"));

//Constructor functions
//funktioner har ett eget scope (inkapsling),
//alltså kan vi inkaplsa i funktioner med "this"
function AirPlane(name, number) {
  this.name = name;
  this.number = number;

  //this.toString = function() {
    //return this.name + ' #' + this.number;
  //}
}

var plane = new AirPlane("SAS", 42);
//plane.capacity = 200;


var cropduster = new AirPlane("Ryan Air", 424);

plane.__proto__.toString = function () {
  return this.name + ' #' + this.number;
}

console.log(cropduster.toString());

//Prestanda mässigt bättre eftersom alla airplanes har samma prototyp
AirPlane.prototype.toString = function() {
  return this.name + ' #' + this.number;
}
AirPlane.prototype.capacity = 200;

var sas = new AirPlane('SAS', 42);
//console.log(sas.toString());
sas.capacity = 100;
//console.log(sas.capacity);
console.log(sas);
//bägge pekar på Airplanes prototyp
console.log(sas.__proto__ == AirPlane.prototype);*/

/*var person = Object.create(Object.prototype, {
  name: {
    value: 'Jakob',
    enumerable: true,
    writable: true,
    configurable: true
  },
  age: {
    value: 21,
    enumerable: true,
    writable: true,
    configurable: true
  },
  toString: {
    value: function (){
      return this.name + " is " + this.age + " years";
    },
    enumerable: true,
    writable: true,
    configurable: true
  }
});

//alternativt sätt att hämta egenskaper
//console.log(person['name']);

//"in" for-loopen hämtar namnen på egenskaperna
for(var property in person){
  console.log("Property: " + property + ", property value: " + person[property]);
}*/

/* getter/setter 
function Car(reg, age){
  this.reg = reg;
  this.age = age;

  //Försiktigt med att för-deklarera variabler som sedan ska bli getter/setter
  //Gör inte detta.
  //this.info = "bla";
}

Object.defineProperty(Car.prototype, 'info', {
  get: function() {
    return this.reg + " has been on the road for " + this.age + " years";
  },
  set: function(value) {
    var valueParts = value.split(" ");
    this.reg = valueParts[0];
    this.age = valueParts[1];
  }
});

var car = new Car("Bruum", 12);
console.log(car.info);

car.info = "GHE123 13";
console.log(car.info);

console.log(car.color);


//var array = ['hello', 'world', 'tomorrow']; //fungerar också
var array = new Array('hello', 'world', 'tomorrow');

console.log("First: " + array[0]);
console.log("Last: " + array[array.length -1]);

Object.defineProperties(Array.prototype, {
  'first': {
    get: function() {
      return this[0];
    }
  },
  'last': {
    get: function() {
      return this[this.length - 1];
    }
  },
  'middle': {
    value: function() {
      return this[(this.length/2).toFixed(1)];
    } 
  } 
});

console.log(array.first);
console.log(array.last);
console.log(array.middle());

*/

/* Inheritance 
function Vehicle(speed) {
  this.speed = speed;
}

Vehicle.prototype.drive = function() {
  return "Drove " + this.speed + " units";
}

//konstant hastighet på 15 enhetslös
function Car(owner, age) {
  Vehicle.call(this, 15);
  this.owner = owner;
  this.age = age;
}

//Denna behövs för att ärva prototypen
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;


var car = new Car('Karl', 10);

console.log(car.drive());
*/

//Sugar syntax, vehicle är fortfarande en funktion
class Vehicle {
  constructor(speed) {
    this.speed = speed;
  }
  drive() {
    return "Drove " + this.speed + " units";
  }
}

class Car extends Vehicle {
  constructor(owner, age){
    super(15);
    this.owner = owner;
    this.age = age;
  }
  drive() {
    return this.owner + " " + super.drive();
  }
  static construct(owner, age){
    return new Car(owner, age);
  }
  get info(){
    return "Owner of vehicle: " + this.owner + ", Price of car: " + this.price;
  }
}

Object.defineProperty(Car.prototype, 'price', {
  value: '40€'
})

var car = Car.construct('Karl', 2);
console.log(car.info);



