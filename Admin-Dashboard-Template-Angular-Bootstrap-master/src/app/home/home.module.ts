
import { NgModule } from '@angular/core';
import { CommonModule }   from '@angular/common';

import { HomeComponent } from './home.component';
import { NavigationModule } from './main-layout/navigation/navigation.module';
import { HomeRoutingModule } from './home.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ViewsModule } from './views/views.module';
import { ErrorModule } from './views/errors/error.module';


@NgModule({
    declarations: [
      HomeComponent
    ],
    imports: [
      CommonModule,
      HomeRoutingModule,
      NavigationModule,
      FormsModule,
      SharedModule,
      ViewsModule,
      ErrorModule,
      FormsModule, 
      ReactiveFormsModule
    ],
    providers: [],
  })
  
  export class HomeModule { }
  