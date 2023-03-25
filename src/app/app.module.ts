import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoundBlockDirective } from './directives/roundBlock.directive';
import { HttpClientModule } from '@angular/common/http';
import { AlumnoComponent } from './components/alumno/alumno.component';
@NgModule({
  declarations: [
    AppComponent,
    RoundBlockDirective,
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
