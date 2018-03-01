'use strict';

$(document).ready(function () {
  var buttons = calculator.buttons;
  $(".calculator-body").append(buttons);
  setButtonListeners(buttons);
  calculator.reset();
});


function setButtonListeners(buttons) {
  buttons.forEach(button => {
    button.click(event => {
      var text = button.text(); //kan använda text eftersom att button är ett jquery element
      if(!isNaN(text)){
        display(text);
      }
      else {
        //hantera texten som är icke-nummer
        handleSpecial(text);
      }
    })
  });
}

function display(text) {
  calculator.appendCalculation(text);
  $('.calculator-display').append(text);
}

function resetDisplay() {
  $('.calculator-display').text('');
}

function addResult(result) {
  $('.result-list').append(`<li>${result}</li>`);
}

function scrollToResult() {
  $('html, body').animate({
    scrollTop: ($('.result').offset().top - 100 )
  }, 500);
}

function handleSpecial(text) {
  var currentDisplay = $('.calculator-display').text();
  if(calculator.isClearCharacter(text)){
    calculator.reset();
  }
  else {
    //Operanden ska inte vara satt första gången eftersom att vi endast har ett 
    //och inte två tal att utföra en beräkning på
    //På detta sätt hoppar vi över calculateNewResult första gången
    if(calculator.isOperatorSet()) {
      calculator.calculateNewResult(currentDisplay);
    }
    calculator.setOperator(text);

    //Här kollar vi om vi är klara eller ska fortsätta beräkna
    if(calculator.isEqualCharacter(text)) {
      addResult(calculator.getCalculation());
      scrollToResult();
    }
    else {
      calculator.setResult(Number(currentDisplay));
    }
  }

  resetDisplay();
}



var key = '[insert key]';
var url = 'http://api.openweathermap.org/data/2.5/forecast?q=nynashamn&APPID=' + key;
/*
$.ajax({
  method: 'GET',
  url: url,
  dataType: "json",
  success: function(response) {
    parseOpenWeather(response.list, 5);
  },
  error: function(err) {
    console.log(err);
  }
});*/
//har ingen error handle
$.get(url, (data) => {
  parseOpenWeather(data.list, 5)
});

function parseOpenWeather(timestamps, size) {
  for(var index = 0; index < size; index++){
    var timestamp = parseTimeStamp(timestamps[index]);
    $('.weather-data').append(`
      <tr>
        <td>${timestamp.time}</td>
        <td>${timestamp.desc}</td>
        <td>${timestamp.temp}</td>
        <td>${timestamp.speed}</td>
      </tr>
    `);
  }
}

function parseTimeStamp(timestamp){
  var time = timestamp.dt_txt;
  time = new Date(time).getHours() + ":00";
  if(time.length < 5) {
    time = "0" + time;
  }
  var desc = timestamp.weather[0].description;
  desc = desc[0].toUpperCase() + desc.substr(1);

  return {
    temp: Number(timestamp.main.temp - 273.15).toFixed(1),
    speed: timestamp.wind.speed.toFixed(1),
    time: time,
    desc: desc
  }
}




