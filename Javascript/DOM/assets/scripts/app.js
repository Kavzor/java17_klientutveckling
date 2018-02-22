'use strict';

/*
//document.body.style.backgroundColor = 'red';

//var body = document.getElementsByTagName('body')[0];

var body = document.querySelector('body');
body.style.backgroundColor = 'red';*/

var sas = new AirplaneCard({
  title: 'SAS',
  information: 'SAS makes a living out of piloting planes',
  delays: 'Ill-defined'
});

var bert = new ProfileCard({
  title: 'Bert',
  text: 'Bert likes the name bert because bert is called Bert'
});

var karl = new ProfileCard({
  title: 'Karl',
  text: 'Karl likes the name karl because karl is called Karl'
});


[bert, sas, karl].forEach((card) => {
  card.putCard();
});

//hämtar en nodelist, har en foreach loop
var listitems = document.querySelectorAll('.container li');
//hämtar en HTMLCollection, har ingen foreach loop
//var listitems = document.getElementsByTagName('li');

listitems.forEach((item) => {
  /*item.addEventListener('mouseover', function(event) {
    this.style.backgroundColor = 'red';
  });
  item.addEventListener('mouseout', function(event) {
    this.style.backgroundColor = 'darkblue';
  });*/
  item.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'red';
  });
  item.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'darkblue';
  });
});


var nameInput = document.getElementById('name-input');
var nameOutput = document.getElementById('name-output');
var submitButton = document.getElementById('submit');
var templateOutput = document.querySelector('#template-output');


/*submitButton.addEventListener('click', (event) => {
  var name = nameInput.value;
  nameOutput.innerHTML = name;
  nameOutput.style.backgroundColor = "green";
  nameOutput.style.color = "white";
  event.preventDefault();
});*/

nameInput.addEventListener('input', (event) => {
  nameOutput.innerHTML = event.target.value;
  nameOutput.style.backgroundColor = "#efa361";
  nameOutput.style.color = "white";
});

submitButton.addEventListener('click', (event) => {
  var name = nameInput.value;

  const template = `
    <h2>The input value of the field is ${name} </h2>
    <p>If you re-submit the value will change</p>
  `;

  templateOutput.innerHTML = template;
  event.preventDefault();
});