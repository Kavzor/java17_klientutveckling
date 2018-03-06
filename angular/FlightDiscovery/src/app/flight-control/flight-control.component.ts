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

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.flights = this.flightService.findAll();
  }


  removeFlight(index) {
    this.flightService.remove(index);
  }
}
