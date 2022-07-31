import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TahsinComponent } from './tahsin/tahsin.component';
import { DirectiveDirective } from './directive/directive.directive';
 

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    TahsinComponent,
    DirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
