/* console.log("hello world"); */

alert("hello world"); 

console.log(typeof "hej");

console.log(typeof 45);

console.log(typeof true); 

console.log(typeof new Array()); 

console.log(typeof null);

console.log(typeof undefined); 



/* Numbers */
console.log("Result: " + 1 + 4); 

console.log("Result: " + Number(1 + 4)); 

console.log(Number("Result: " + 1 + 4)); 

console.log(isNaN(Number("Result: " + 1 + 4))); 

console.log(0.2 + 0.1); 

console.log((0.2 + 0.1).toFixed(2)); 

console.log((0.3 + 0.999).toFixed(1)); 
console.log((0.3 + 0.051).toFixed(1)); 

console.log(Math.sin(Math.PI)); 

console.log(Math.random() * 10); 

/* Strings */

console.log("Hello world");
console.log(new String("Hello world"));

console.log(typeof "Hello World");
console.log(typeof new String("hello world")); 

console.log("hello    world".length); 

console.log("hello world".substr(6, 4)); 

console.log("hello world".charAt(4)); 
console.log("hello world"[2]); 

/* iterationer */

while(true){
  //kör inte detta, blir en stack overflow
}
//undefined blir false med javascripts type conversion
while(undefined) {
  console.log("inside while");
}
console.log("outside while");

for(var index = 0; index < "helloworld".length; index++){
  console.log("helloworld"[index]);
}

/* Arrays */


//var array = new Array();
//var array = [10, 10, 10, 10, 10];

//skapar 10 tomma platser
var array = new Array(10);
console.log(array);
*/

/*
var array = new Array();
array[0] = "hello";
array[1] = "world";

console.log(array);


var array = new Array();
array.push("hello");
array.push("world");

console.log(array.pop());
console.log(array.length);

var array = [10];
array.push("hello");
array.push("world");

//prova att ändra var till let
for(var index = 0; index < array.length; index++) {
  //console.log(array[index]);
}

console.log(index);

//console.log(array);
var array = ['hello', 'world', 'på', 'dig'];

for(let item of array){
  //console.log(item);
}

//samma sak som nedanför
array.forEach(function(value, index, array) {

});


array.forEach((value, index, array) => {
  console.log(index + ". " + value);
});


/* functions */


//Deklarera funktioner först!
function subtraction(a, b) {
  return a - b;
}

console.log(subtraction(10, 4));


function addition(a = 0, b = 0) { 
  return a + b;
}

console.log(addition(5));


//en funktion är ett first class object
var sumOf = function addition(a, b) {
  return a + b;
}

var sumOf = (a, b) => {
  return a + b;
}

console.log(sumOf(2, 5));