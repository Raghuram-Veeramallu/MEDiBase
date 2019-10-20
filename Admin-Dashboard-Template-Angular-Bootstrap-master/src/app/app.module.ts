//import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes.service';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { FacilityLoginComponent } from './facility-login/facility-login.component';
import { HttpClientModule } from '@angular/common/http';
//import { MaterializeModule } from 'angular2-materialize';


@NgModule({
  declarations: [
    AppComponent,
    FacilityLoginComponent,
  ],
  imports: [
    // AgmCoreModule.forRoot({
    //   apiKey: ''
    // }),
    //MaterializeModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
