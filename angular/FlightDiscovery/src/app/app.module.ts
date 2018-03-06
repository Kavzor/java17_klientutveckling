import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { TimePipe } from './pipe/time.pipe';
import { ClockPipe } from './pipe/clock.pipe';
import { FlightService } from './shared/flight.service';
import { FlightControlComponent } from './flight-control/flight-control.component';


const routes: Routes = [
  {
    path: '', component: FlightListComponent
  },
  {
    path: 'admin', component: FlightControlComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    FlightControlComponent,
    TimePipe,
    ClockPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FlightService], //Här registerar vi services som ska vara globala
  bootstrap: [AppComponent]
})
export class AppModule { }
