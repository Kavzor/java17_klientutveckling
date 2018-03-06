import { Injectable } from '@angular/core';
import { Flight } from './flights';

@Injectable()
export class FlightService {

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

  constructor() { }

  find(index: number): Flight {
    return this.flights[index];
  }

  findAll(): Array<Flight> {
    return this.flights;
  }

  add(flight: Flight): void {
    this.flights.push(flight);
  }

  remove(index: number): void {
    this.flights.splice(index, 1);
  }

  update(index: number, flight: Flight): Flight {
    this.flights[index] = flight;
    return flight;
  }
}
