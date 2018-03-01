'use strict';

//IIFE (Immediately invoked function expression)
/*var helloWorldIIFE = (function() {
  console.log("IIFE ran");
  var getMessage = function() {
    return "hello world";
  }

  var getStatus = function() {
    return "dying";
  }

  return {
    getMessage: getMessage
  }
})();
*/

//console.log(helloWorldIIFE.getMessage());


//calculator

var calculator = (function(/* här tas variabelerna ifrån botten emot */) {

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const signs = ["+", "-", "/", "*", "=", "C"];
  var buttons = [];


  function generateButton(text, style) {
    var button = $(`<button>${text}</button>`);
    button.addClass(style);
    return button;
  }

  numbers.forEach(number => {
    buttons.push(generateButton(number, 'number-button'));
  });

  signs.forEach(sign => {
    buttons.push(generateButton(sign, 'sign-button'));
  });


  var isClearCharacter = function(character) {
    return character === 'C';
  }

  var isEqualCharacter = function(character) {
    return character === '=';
  }

  var reset = function() {
    this.result = undefined;
    this.calculation = undefined;
    this.operator = undefined;
  }

  var getResult = function() {
    return this.result;
  }

  var setResult = function(result) {
    this.result = result;
    this.calculation = result + this.operator;
  }

  var isOperatorSet = function() {
    return this.operator !== undefined;
  }

  var setOperator = function(operator) {
    this.operator = operator;
  }

  var appendCalculation = function(text) {
    this.calculation += text;
  }

  var getCalculation = function() {
    if(!isFinite(this.result)){
      this.result = 'non-defined';
    }
    this.calculation += '=' + this.result;
    return this.calculation;
  }

  var calculateNewResult = function(value) {
    switch(this.operator) {
      case '+': this.result += Number(value); break;
      case '-': this.result -= Number(value); break;
      case '*': this.result *= Number(value); break;
      case '/': this.result /= Number(value); break;
    }    
    console.log(this.calculation);
  }


  return {
    buttons: buttons,
    getCalculation: getCalculation,
    getResult: getResult,
    isClearCharacter: isClearCharacter,
    isEqualCharacter: isEqualCharacter,
    isOperatorSet: isOperatorSet,
    setResult: setResult,
    setOperator: setOperator,
    appendCalculation: appendCalculation,
    calculateNewResult: calculateNewResult,
    reset: reset
  }
})(/* härifrån kan du skicka variabler till IIFE anropet */);








