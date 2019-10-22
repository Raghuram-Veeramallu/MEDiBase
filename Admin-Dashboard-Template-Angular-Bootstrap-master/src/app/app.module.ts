//import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, APP_ID, APP_INITIALIZER } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes.service';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { FacilityLoginComponent } from './facility-login/facility-login.component';
import { HttpClientModule } from '@angular/common/http';
//import { MaterializeModule } from 'angular2-materialize';


import {IPFS, initIPFS} from './ipfs';


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
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initIPFS,
    multi: true,
    deps: [IPFS]
  }],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
