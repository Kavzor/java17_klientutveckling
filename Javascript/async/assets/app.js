'use strict';
/*
var ajax = new XMLHttpRequest();
//denna anropas när anropet görs
ajax.onreadystatechange = function() {
  if(this.readyState === 4) {
    if(this.status === 200) {
      var response = this.response;
      var post = JSON.parse(response);
      console.log(post.title);
    }
  }
}

ajax.open('GET', 'http://localhost:3000/posts/2', true);
ajax.send();
*/

const KEY = '5b755d33b1f3737e41eab07a7de9424e';
const API_URL = 'http://api.openweathermap.org'
                    + '/data/2.5/forecast?q=nynashamn&APPID=' + KEY;

function HttpGet(url) {
  this.url = url;
  this.ajax = new XMLHttpRequest();
}

HttpGet.prototype.proceed = function(callback) {
  this.ajax.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200){
      callback(this.response);
    }
  }
  this.ajax.open('GET', this.url, true);
  this.ajax.send();
}


function fetch(url) {
  return new HttpGet(url);
}

/*
fetch(API_URL).proceed(response => {
  var weatherData = JSON.parse(response);
  var time = weatherData.list[0].dt_txt;
  var hour = new Date(time).getHours();
  console.log(hour + ":00");
});*/



function $(selector) {
  return document.querySelector(selector);
}


function DOMElement(selector) {
  this.element = $(selector);
}

DOMElement.prototype.select = function(target) {
  this.selected = $(target);
  return this;
}

DOMElement.prototype.click = function(callback) {
  this.element.addEventListener('click', event => {
    event.selected = this.selected;
    callback(event);
  });
}

function find(selector) {
  return new DOMElement(selector);
}



find('.fetch-data').select('.weather-data').click(event => {
  fetch(API_URL).proceed(response => {
    //event.selected.innerHTML = response;
    //Om knappen är en formulär knapp bör du anropa preventDefault för att undvika 
    //sidan laddas om
    //event.preventDefault();

    //backlänges blir JSON.stringify(weatherData)
    var weatherData = JSON.parse(response);
    
    var weatherList = weatherData.list;

    //Foreach skriver ut alla element, vi vill endast skriva ut 5 stycken
    /*
    weatherList.forEach(data => {
      console.log(data);
    });*/

    var tbody = event.selected;
    for(var index = 0; index < 5; index++){
      var time = weatherList[index].dt_txt;
      var date = new Date(time);
      var hour = date.getHours() + ":00";

      var speed = weatherList[index].wind.speed;
      var timestamp = `
        <tr>
          <td>${hour}</td>
          <td>${speed}</td>
        </tr>
      `;
      tbody.innerHTML += timestamp;
    }
  });
});








