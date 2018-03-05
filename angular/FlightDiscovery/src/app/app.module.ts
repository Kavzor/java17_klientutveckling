import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { TimePipe } from './pipe/time.pipe';
import { ClockPipe } from './pipe/clock.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FlightListComponent,
    TimePipe,
    ClockPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
