//import { AgmCoreModule } from '@agm/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { AngularFireModule } from 'angularfire2';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes.service';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { FacilityLoginComponent } from './facility-login/facility-login.component';
import { HttpClientModule } from '@angular/common/http';
//import { MaterializeModule } from 'angular2-materialize';
import { FormsModule }   from '@angular/forms';
import { FireBaseConfig } from '../environments/firebaseConfig';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'
//import{FireBaseConfig} from '../environments/firebaseConfig'
//import { IPFS, initIPFS } from './ipfs';
//import { Component } from '@angular/core';
//import { AngularFireDatabaseModule} from 'angularfire2/database';
//import { environment } from '../environments/environment';

//import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AuthService } from './services/auth.service';
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
    FormsModule,
    AngularFireModule.initializeApp(FireBaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  //  AngularFireModule.initializeApp(FireBaseConfig),
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
  ],
  
  
  providers: [//{
    // provide: APP_INITIALIZER,
    // useFactory: initIPFS,
    // multi: true,
    // deps: [IPFS]
   // AuthService
  ],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {


 }
