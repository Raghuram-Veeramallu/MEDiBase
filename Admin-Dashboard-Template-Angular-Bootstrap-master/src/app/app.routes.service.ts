
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FacilityLoginComponent } from './facility-login/facility-login.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'facility', pathMatch: 'full' },
  { path: 'facility', component: FacilityLoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class AppRoutingModule {}
