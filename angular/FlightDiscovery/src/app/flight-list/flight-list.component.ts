import { Component, OnInit } from '@angular/core';
import { Flight } from '../shared/flights';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['./flight-list.component.css']
}) //Denna komponent genererades av "ng generate component flight-list"
export class FlightListComponent implements OnInit { //interfaces är syntax sugar

  showImages: boolean = false;
  showPeriodTime: boolean = false;
  filteredFlights: Array<Flight>;

  //denna används i template:n (html) och triggas av att värdet ändras
  get flightFilter() {
    return this.filter;
  }
  set flightFilter(value) {
    this.filter = value;
    this.filteredFlights = this.filter ? this.filterFlights(this.filter) : this.flights; 
  }

  filter: string;
  flights: Array<Flight> = [
    {
      image: "http://sketchof.com/1024/drawing-of-a-sketched-white-design-mascot-flying-a-plane-with-a-passenger-by-leo-blanchette-290.jpg",
      number: 42,
      type: "Private",
      gate: "16AD",
      departs: "03:32",
      destination: "Beijing",
      delays: "0"
    },
    {
      image: "http://users.skynet.be/porreke/plane2.jpg",
      number: 653,
      type: "Jumbo",
      departs: "12:42",
      gate: "32D",
      destination: "Stockholm",
      delays: "343" //prova 59, 29, 61 och 0
    },
    {
      image: "http://www.yedraw.com/transport/fighter-plane-6.jpg",
      number: 77,
      type: "Fighter",
      gate: "Classified",
      departs: "Classified",
      destination: "Classified",
      delays: "Classified"
    }
  ]


  //Så konstruktorn i angular, ska endast användas för att instansiera objekt
  //Inte till att tilldela värden
  constructor() { }

  //Här vill vi tilldela data
  ngOnInit() {
    this.filteredFlights = this.flights;
  }

  toggleImages() {
    //gör så att showImages byter värde från true --> false, elr. false --> true
    this.showImages = !this.showImages;
  }

  toggleClock() {
    this.showPeriodTime = !this.showPeriodTime;
  }

  filterFlights(filter: string): Array<Flight> {
    filter = filter.toLowerCase();
      //Filtrera över alla fält
      //om du retunerar true så sparas flight:et ner i 
      //en lista som filter metoden retunerar

    return this.flights.filter(flight => {
      return flight.destination.toLowerCase().indexOf(filter) !== -1 ||
        flight.gate.toLowerCase().indexOf(filter) !== -1 ||
        flight.type.toLowerCase().indexOf(filter) !== -1 ||
        String(flight.number).toLowerCase().indexOf(filter) !== -1; 
    });
  }
}
