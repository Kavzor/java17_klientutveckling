import { Component, OnInit } from '@angular/core';
import { Flight } from '../shared/flights';
import { FlightService } from '../shared/flight.service';

@Component({
  selector: 'app-flight-control',
  templateUrl: './flight-control.component.html',
  styleUrls: ['./flight-control.component.css']
})
export class FlightControlComponent implements OnInit {


  flight: Flight;
  flights: Array<Flight>;
  activeIndex: number;

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.flights = this.flightService.findAll();
    this.clearFlight();
  }

  updateFlight(index, flight) {
    this.flightService.update(index, flight);
    this.clearFlight();
  }

  addFlight(flight: Flight) {
    this.flightService.add(flight);
    this.clearFlight();
  }

  removeFlight(index) {
    this.flightService.remove(index);
    if(index === this.activeIndex && !this.flights.length) {
      this.clearFlight();
    }
    if(this.activeIndex > index) {
      this.activeIndex--;
    }
  }

  setActiveIndex(index) {
    this.activeIndex = index;
    this.flight = this.flights[index];
  }

  clearFlight() {
    this.activeIndex = -1;
    this.flight = {
      number: 0,
      type: "Plane",
      image: "https://",
      departs: undefined,
      gate: undefined,
      delays: undefined,
      destination: undefined
    }
  }

}
