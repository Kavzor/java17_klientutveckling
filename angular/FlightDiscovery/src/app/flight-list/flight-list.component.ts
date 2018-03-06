import { Component, OnInit } from '@angular/core';
import { Flight } from '../shared/flights';
import { FlightService } from '../shared/flight.service';

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
  flights: Array<Flight>;

  //Så konstruktorn i angular, ska endast användas för att instansiera objekt
  //Inte till att tilldela värden
  constructor(private flightService: FlightService) { }

  //Här vill vi tilldela data
  ngOnInit() {
    this.flights = this.flightService.findAll();
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
