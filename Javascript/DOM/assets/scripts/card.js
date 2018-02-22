/*
//document.querySelector hämtar ut den första matchningen med css selectors
var profileContainer = document.querySelector('.profile-cards');

var profileCard = document.createElement('div');
var titleElement = document.createElement('h2');
var textElement = document.createElement('p');

titleElement.innerHTML = 'Jakob';
textElement.innerHTML = 'Jakob likes the name jakob because jakob is named jakob';

profileCard.appendChild(titleElement);
profileCard.appendChild(textElement);
profileContainer.appendChild(profileCard);

//profileCard.style.width = '25%';
//profileCard.style.padding = '10px';
//profileCard.style.border = '2px solid black';
//profileCard.style.borderRadius = '10px';


profileCard.className = 'profile-card';
*/


/*
function createProfileCard(title, text) {
  var profileCard = document.createElement('div');
  var titleElement = document.createElement('h2');
  var textElement = document.createElement('p');

  titleElement.innerHTML = title;
  textElement.innerHTML = text;
  profileCard.className = "profile-card";

  profileCard.appendChild(titleElement);
  profileCard.appendChild(textElement);

  return profileCard;
}

var title = 'Jakob';
var text = 'Jakob likes the name jakob because jakob is called jakob';
var profileContainer = document.querySelector('.profile-cards');

//var card = createProfileCard(title, text);

profileContainer.appendChild(createProfileCard(title, text));
profileContainer.appendChild(createProfileCard(title, text));
*/

/*
function ProfileCard(profile) {
  this.title = profile.title;
  this.text = profile.text;

  this.getCard = function() {
    var profileCard = document.createElement('div');
    var titleElement = document.createElement('h2');
    var textElement = document.createElement('p');

    titleElement.innerHTML = this.title;
    textElement.innerHTML = this.text;
    profileCard.className = "profile-card";

    profileCard.appendChild(titleElement);
    profileCard.appendChild(textElement);

    return profileCard;
  }
}

var profileContainer = document.querySelector('.profile-cards');

var bert = new ProfileCard({
  title: 'Bert',
  text: 'Bert likes the name bert because bert is called bert'
});

var lennart = new ProfileCard({
  title: 'Lennart',
  text: 'Lennart likes the name lennart because lennart is called lennart'
});

profileContainer.appendChild(bert.getCard());
profileContainer.appendChild(lennart.getCard());
*/

//card den ska representera hela kortet, dvs. allmäna attribut och container:n
function Card(card) {
  //Container är det element som kortet ska ligga i
  this.container = document.querySelector(card.container);

  //attribute sets representerar alla olika attribut som är allmäna för alla kort
  this.title = card.attributeSet.title;
  
  this.card = document.createElement('div');
  var heading = document.createElement('h2');

  //classList är en lista med className
  heading.classList.add(card.attributeSet.headingTheme);
  this.card.classList.add(card.attributeSet.mainStyle);

  heading.innerHTML = this.title;
  this.card.appendChild(heading);
}

//Sätter putCard på prototypen för att slippa återskapa den för varje kort
Card.prototype.putCard = function () {
  this.container.appendChild(this.card);
}


function ProfileCard(profile) {
  Card.call(this, {
    container: '.profile-cards',
    attributeSet : {
      mainStyle: 'profile-card',
      headingTheme: 'theme-darkBlue',
      title: profile.title
    }
  });
  
  function prepareBody(card) {
    var body = document.createElement('p');
    body.innerHTML = profile.text;
    card.appendChild(body);
  }
  prepareBody(this.card);
}

//profileCard är subfunktionen, Card är superfunktionen
ProfileCard.prototype = Object.create(Card.prototype);
ProfileCard.prototype.constructor = ProfileCard;


function AirplaneCard(airplane) {
   Card.call(this, {
    container: '.airplane-cards',
    attributeSet: {
      mainStyle: 'airplane-card',
      headingTheme: 'theme-darkRed',
      title: airplane.title
    }
   });

  function prepareBody(card){
    var text = document.createElement('p');
    var delays = document.createElement('footer');

    text.innerHTML = airplane.information;
    delays.innerHTML = airplane.delays;

    card.appendChild(text);
    card.appendChild(delays);
  }
  prepareBody(this.card);
}

AirplaneCard.prototype = Object.create(Card.prototype);
AirplaneCard.prototype.constructor = AirplaneCard;

